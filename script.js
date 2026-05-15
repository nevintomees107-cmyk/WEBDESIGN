function calculateAttendance() {



    let total = parseInt(document.getElementById("totalClasses").value);

    let attended = parseInt(document.getElementById("attendedClasses").value);

    let required = parseFloat(document.getElementById("requiredPercentage").value);



    if (isNaN(total) || isNaN(attended) || isNaN(required)) {

        alert("Please fill all fields");

        return;

    }



    let currentPercentage = (attended / total) * 100;



    document.getElementById("currentPercentage").innerHTML =

        "Current Attendance: " + currentPercentage.toFixed(2) + "%";



    // Classes needed to reach required percentage

    let extraClasses = 0;

    let futureTotal = total;

    let futureAttended = attended;



    while (((futureAttended / futureTotal) * 100) < required) {

        futureAttended++;

        futureTotal++;

        extraClasses++;

    }



    // Classes that can be skipped

    let skipClasses = 0;

    futureTotal = total;



    while (((attended / (futureTotal + 1)) * 100) >= required) {

        futureTotal++;

        skipClasses++;

    }



    if (currentPercentage < required) {

        document.getElementById("attendanceNeed").innerHTML =

            "You need to attend " + extraClasses +

            " more classes to reach " + required + "% attendance.";



        document.getElementById("canSkip").innerHTML = "";

    }

    else {

        document.getElementById("attendanceNeed").innerHTML =

            "You already have required attendance.";



        document.getElementById("canSkip").innerHTML =

            "You can skip " + skipClasses +

            " classes and still maintain " + required + "% attendance.";

    }

}
