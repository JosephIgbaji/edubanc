import React, { useEffect, useState } from "react";
// import Alert from "../admin/Alert";

const SubscribeToNews = () => {
  // const [message, setMessage] = useState("");

  // const HandleShowAlert = () => {
  //   setMessage("Subscription Successfull");
  // };

  // const HandleClose = () => {
  //   setMessage("");
  // };

  return (
    <div className="overflow-x-hidden mt-32 mb-32 text-center flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">
        &quot;Stay in the loop and be the first to know about exciting updates!
        <br />
        Subscribe to our newsletter from Edubanc.&quot;
      </h2>

      <div id="mc_embed_signup" className="w-[400px]">
        <form
          action="https://edubanc.us14.list-manage.com/subscribe/post?u=8def29671dd01fe1a232b6fd6&amp;id=4d660e99ad&amp;f_id=00c998e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <input
                className=" border-[1px]  p-2 rounded-2xl mb-2"
                type="email"
                placeholder="Enter Email Address"
                name="EMAIL"
                // class="required email"
                id="mce-EMAIL"
                required=""
              />
            </div>
            <div class="mc-field-group">
              <input
                className=" border-[1px] p-2 rounded-2xl mb-2"
                type="text"
                placeholder="Enter First Name"
                name="FNAME"
                // class="required text"
                id="mce-FNAME"
                required=""
              />
            </div>
            <div class="mc-field-group">
              <input
                className=" border-[1px] p-2 rounded-2xl mb-2"
                type="text"
                placeholder="Enter Last Name"
                name="LNAME"
                // class=" text"
                id="mce-LNAME"
              />
            </div>

            <div class="clear">
              <input
                // onClick={() => HandleShowAlert}
                className="bg-primary cursor-pointer p-2 rounded-2xl text-white my-3"
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                // class="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
        <MailchimpScript />
      </div>
      <div className="text-xs text-textGray">
        We care about your data in our privacy policy
      </div>
      {/* {message && (
        <div className="flex items-center justify-center absolute z-10 top-[50%] right-[50%]">
          <Alert message={message} onClick={HandleClose} />
        </div>
      )} */}
    </div>
  );
};

const MailchimpScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return null; // No need to render anything for this component
};

export default SubscribeToNews;
