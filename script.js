/* =====================================================
   HEALTH & HYGIENE CSP PROJECT
   JAVASCRIPT
===================================================== */


/* ================= QUIZ ================= */

function checkQuiz() {

    let score = 0;

    const totalQuestions = 10;

    let answeredQuestions = 0;


    for (let i = 1; i <= totalQuestions; i++) {

        const selected = document.querySelector(
            `input[name="q${i}"]:checked`
        );


        if (selected) {

            answeredQuestions++;


            if (selected.value === "correct") {

                score++;

            }

        }

    }


    const result =
        document.getElementById("result");


    /* Check whether all questions are answered */

    if (answeredQuestions < totalQuestions) {

        result.innerHTML =
            "⚠️ Please answer all 10 questions.";

        result.style.color = "#d97706";

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }


    /* Display result */

    if (score === 10) {

        result.innerHTML =
            "🏆 Outstanding! You scored 10/10.";

    }

    else if (score >= 8) {

        result.innerHTML =
            "🎉 Excellent! You scored "
            + score +
            "/10.";

    }

    else if (score >= 5) {

        result.innerHTML =
            "👏 Good job! You scored "
            + score +
            "/10.";

    }

    else {

        result.innerHTML =
            "📚 Keep learning! You scored "
            + score +
            "/10.";

    }


    result.style.color = "#087f8c";


    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}



/* ================= RESET QUIZ ================= */

function resetQuiz() {


    /* Clear all selected answers */

    document
        .querySelectorAll(
            '#quiz input[type="radio"]'
        )
        .forEach(function(input) {

            input.checked = false;

        });


    /* Clear result */

    const result =
        document.getElementById("result");


    result.innerHTML = "";


    /* Scroll to quiz */

    document
        .getElementById("quiz")
        .scrollIntoView({

            behavior: "smooth"

        });

}



/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");


    navMenu.classList.toggle("active");

}



/* ================= CLOSE MOBILE MENU ================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {


        link.addEventListener(
            "click",
            function() {


                document
                    .getElementById("navMenu")
                    .classList.remove("active");

            }
        );

    });



/* ================= FEEDBACK FORM ================= */

document
    .getElementById("feedbackForm")
    .addEventListener(
        "submit",
        function(event) {


            /* Prevent page refresh */

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const message =
                document.getElementById(
                    "feedbackMessage"
                );


            message.innerHTML =
                "✅ Thank you, "
                + name
                + "! Your feedback has been submitted successfully.";


            /* Clear form */

            this.reset();


            /* Scroll to message */

            message.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }
    );