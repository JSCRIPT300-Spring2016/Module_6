/* global $ confirm */

$(function () {

	"use strict";

	$.get("/trucks", function (truckList) {
		var list = [];

		if (truckList) {
			truckList.forEach(function (truck) {
				list.push("<li><li><span class=\"delete_link\" data-truck=\"" + truck._id + "\">X</span><a href=\"/trucks/" + truck._id + "\">" + truck.name + "</a></li>");
			});
			$(".trucks-list").append(list);
		}
	});

	$("form").on("submit", function (e) {
		e.preventDefault();
		var $form = $(this);
		var truckId = $("#foodTruckChoices").val();
		var truckData = $form.serialize() + serializeFoodTypes();

		if ($("input[type=radio][name=updateType]:checked").val() === "new") {
			$.ajax({
				method: "POST",
				url: "/trucks",
				data: truckData
			})
			.done(function (truck) {
				var list = [];

				list.push("<li><span class=\"delete_link\" data-truck=\"" + truck._id + "\">X</span><a href=\"/trucks/" + truck._id + "\">" + truck.name + "</a></li>");
				$(".trucks-list").append(list);
				$form.trigger("reset");
				resetForm();
			});
		} else if ($("input[type=radio][name=updateType]:checked").val() === "edit") {
			$.ajax({
				method: "PUT",
				url: "/trucks/" + truckId,
				data: truckData
			})
			.done(function (_truck) {
				// Refresh the entire truck list?
				// Otherwise we'd have to figure out how to remove the old item and add the new one.
				// Don't reset the form - just continue editing the
				// selected truck until the user says otherwise.
			});
		}
	});

	function serializeFoodTypes() {
		var typeString = "";

		$(".foodType-list li").each(function (index, item) {
			typeString += "&foodType=" + item.innerText;
		});

		return typeString;
	}

	function addFoodType(type) {
		$(".foodType-list").append("<li>" + type + "</li>");
		$("[name=type]").val("");
	}

	$("[name=type").on("keypress", function (e) {
		if (e.which === 13) {
			e.preventDefault();
			addFoodType($(this).val());
		}
	});

	$("#addFoodType").on("click", function (_e) {
		var foodType = $("[name=type]").val();

		addFoodType(foodType);
	});

	$("#clearFoodTypes").on("click", function (_e) {
		$(".foodType-list").empty();
	});

	function resetForm() {
		$(".foodType-list").empty();
		$("input[type=checkbox][name=payment]").each(function () {
			$(this).prop("checked", false);
		});
		$("input[type=checkbox][name=schedule]").each(function () {
			$(this).prop("checked", false);
		});
	}

	$("input[type=radio][name=updateType]").change(function() {
		if (this.value === "new") {
			// Update labels.
			$("#foodTruckHeader").text("Add Food Trucks:");
			$("#foodTruckLegend").text("New Food Truck:");
			$("input[type=text][name=name]").prop("readonly", false);
			$("#foodTruckChoices").hide();
			$("input[type=submit]").val("Add Food Truck");
			// Reset form data.
			$("form").trigger("reset");
			resetForm();
		} else if (this.value === "edit") {
			$("#foodTruckHeader").text("Edit Food Trucks:");
			$("#foodTruckLegend").text("Edit Food Truck:");
			$("input[type=text][name=name]").prop("readonly", true);
			$("input[type=submit]").val("Update Food Truck");

			// Reset the food truck options list in case it has changed.
			$.ajax({
				method: "GET",
				url: "/trucks"
			})
			.done(function (truckList) {
				var list = [];

				if (truckList) {
					truckList.forEach(function (truck) {
						list.push("<option value=\"" + truck._id + "\">" + truck.name + "</option>");
					});
					$("#foodTruckChoices").append(list);
					//$("#foodTruckChoices").val(truckList[0]._id);
					$("#foodTruckChoices").show();
					$("#foodTruckChoices").trigger("change");
				}
			});
		}
	});

	$("#foodTruckChoices").change(function() {
		$.ajax({
			method: "GET",
			url: "/trucks/" + this.value
		})
		.done(function (truck) {
			// Clear existing form data.  form.reset() seems to work a little too well
			// in that none of the changes below show up.  Asynchronous?
			resetForm();

			// Populate the form with truck data.
			$("input[type=text][name=name]").val(truck.name);
			$("[name=description]").val(
				truck.hasOwnProperty("description") && truck.description ? truck.description : "");
			if (truck.hasOwnProperty("foodType") && truck.foodType) {
				truck.foodType.forEach(function (element) {
					addFoodType(element);
				});
			}
			if (truck.hasOwnProperty("payment") && truck.payment) {
				truck.payment.forEach(function (element) {
					var id = element[0].toLowerCase() + element.slice(1).replace(/ /g,"") + "Payment";

					$("#" + id).prop("checked", true);
				});
			}
			if (truck.hasOwnProperty("schedule") && truck.schedule) {
				if (truck.schedule.length > 0) {
					truck.schedule.forEach(function (element) {
						$("#" + element).prop("checked", true);
					});
				} else {
					// If the schedule is empty, assume the truck is always available.
					$("input[type=checkbox][name=schedule]").each(function () {
						$(this).prop("checked", true);
					});
				}
			}
			$("input[type=text][name=website]").val(
				truck.hasOwnProperty("website") && truck.website ? truck.website : "");
			$("input[type=text][name=Facebook]").val(
				truck.hasOwnProperty("Facebook") && truck.Facebook ? truck.Facebook : "");
			$("input[type=text][name=Twitter]").val(
				truck.hasOwnProperty("Twitter") && truck.Twitter ? truck.Twitter : "");
		});
	});

	$(".trucks-list").on("click", "[data-truck]", function (e) {
		if (!confirm("Remove food truck?")) {
			return false;
		}
		var $target = $(e.currentTarget);

		$.ajax({
			method: "DELETE",
			url: "/trucks/" + $target.data("truck")
		})
		.done(function () {
			$target.closest("li").remove();
		});
	});
});