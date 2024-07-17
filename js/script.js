// Declare variables
let weight = 50;
let age = 25;
let height,
    gender,
    BMI,
    category;
let currentPage = 1;

// Click event for decreasing age
$(".ageMinus").click(function () {
    age--;
    $(".ageNum").text(age);
})

// Click event for increasing age
$(".agePlus").click(function () {
    age++;
    $(".ageNum").text(age);
})

// Click event for selecting male gender
$(".male").click(function () {
    gender = 'male';
    $(".male").addClass("genderClicked");
    $(".female").removeClass("genderClicked");
})

// Click event for selecting female gender
$(".female").click(function () {
    gender = 'female';
    $(".female").addClass("genderClicked");
    $(".male").removeClass("genderClicked");
})

// Click event for calculating BMI
$(".calculateBtn").click(function () {
    // Check if current page is 1
    if (currentPage === 1) {
        // Get height and weight values from input fields
        height = $(".heightInput").val();
        weight = $(".weightInput").val();
        // Change screen to page 2
        $(".screen_2").css("left", "0%");
        $(".screen_1").css("right", "100%");
        // Calculate BMI
        BMI = weight / ((height / 100) ** 2);
        BMI = Math.round(BMI * 10) / 10;
        // Check BMI range and assign category
        if (BMI < 18.5) {
            category = 'Underweight';
            $(".resultRange").css("color", "#F7CAC9");
            $(".suggestion").text(
                "You have an underweight body weight. It's important to focus on healthy eating" +
                " habits and consider consulting a healthcare professional for guidance on reac" +
                "hing a healthy weight."
            );
        } else if (BMI > 25) {
            category = 'Overweight';
            $(".resultRange").css("color", "#F7CAC9");
            $(".suggestion").text(
                "You have an overweight body weight. It's recommended to focus on a balanced di" +
                "et and regular exercise to achieve a healthier weight. Consulting a healthcare" +
                " provider for personalized advice is also beneficial."
            );
        } else {
            category = 'Normal';
            $(".resultRange").css("color", "#92A8D5");
            $(".suggestion").text(
                "You have a normal body weight. Keep up the good work by maintaining a healthy " +
                "lifestyle through nutritious eating and staying active. Regular health check-u" +
                "ps can help you track your progress and maintain your well-being."
            );
        }
        // Display category and BMI
        $(".resultRange").text(category);
        $(".resultBMI").text(BMI);
        // Change button text to "TRY AGAIN"
        $(".calculateBtn").text("TRY AGAIN");
        // Set current page to 2
        currentPage = 2;
    } else {
        // Change screen to page 1
        $(".screen_2").css("left", "100%");
        $(".screen_1").css("right", "0%");
        // Change button text to "CALCULATE YOUR BMI"
        $(".calculateBtn").text("CALCULATE YOUR BMI");
        // Set current page to 1
        currentPage = 1;
    }
})