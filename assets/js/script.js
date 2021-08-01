$(function () {});

var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

var scheduleWorkday = [
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" }
];

var scheduledEvents = JSON.parse(localStorage.getItem("workDay"));
if (scheduledEvents) {
    scheduleWorkday = scheduledEvents;
}