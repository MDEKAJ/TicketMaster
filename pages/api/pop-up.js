import Swal from "sweetalert2";
import axios from "axios";

export default function waitingListPopUp() {
  return Swal.mixin({
    input: "text",
    confirmButtonText: "Next &rarr;",
    showCancelButton: true,
    progressSteps: ["1", "2"],
  })
    .queue([
      {
        title: "Please enter your Email Address",
        text: "So we can contact you when these tickets become available",
        input: "email",
      },
      {
        title: "Please enter your mobile number",
        text: "So we can contact you when these tickets become available",
        input: "tel",
      },
    ])
    .then((result) => {
      if (result.value) {
        const emailAddress = result.value[0];
        const mobileNumber = result.value[1];

        Swal.fire({
          title: "Thats all we need!",
          text: "Go ahead and submit your details",
          confirmButtonText: "Submit",

          preConfirm: async () => {
            try {
              const response = await axios.post(`/api/waiting-list`, {
                mobileNumber,
                emailAddress,
              });
              if (!response.ok) {
                let timerInterval;

                return Swal.fire({
                  title: "Awesome",
                  html:
                    "Your signed up and ready to roll, so I'm leaving now...",
                  icon: "success",
                  timer: 5000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent();
                      if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                          b.textContent = Swal.getTimerLeft();
                        }
                      }
                    }, 100);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                  },
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                  }
                });
              }
              return response.json();
            } catch (error) {
              Swal.fire({
                confirmButtonText: "Retry",
                icon: "warning",
                title: "Oops...",
                text: "Something went wrong on our end",
              });
            }
          },
        });
      }
    });
}
