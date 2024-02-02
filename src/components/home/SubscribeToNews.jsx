import React, { useEffect } from "react";

const SubscribeToNews = () => {
  return (
    <div className="w-full mt-32 mb-32 text-center flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">
        &quot;Stay in the loop and be the first to know about exciting updates!
        Subscribe to our newsletter from Edubanc.&quot;
      </h2>
      <p className="text-sm text-textGray my-4">
        Sign up for our newsletter and get news on the latest on Edubanc
      </p>
      {/* <div className="mb-4">
          <input
            className="border-[1px] p-3 rounded-lg mr-3"
            placeholder="Enter your email"
          />
          <ButtonPrimary name="Subscribe" />
        </div> */}
      <div>
        {/* <div id="mc_embed_shell"> */}
        {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"/> */}
        {/* <style type="text/css"> */}
        {/* //mc_embed_signup */}
        {/* background: "#fff"; false; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px; */}
        {/* /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
        {/* </style> */}
        <div id="mc_embed_signup">
          <form
            action="https://edubanc.us14.list-manage.com/subscribe/post?u=8def29671dd01fe1a232b6fd6&amp;id=4d660e99ad&amp;f_id=00c998e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              {/* <h2 className="text-lg font-semibold mb-5">Subscribe</h2> */}
              <div class="indicates-required mb-3">
                <span className="text-red-700">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="text-red-700">*</span>
                </label>
                <input
                  className=" border-[1px] p-1 rounded-lg mb-2"
                  type="email"
                  placeholder="Enter Email Address"
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required=""
                  // value=""
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">
                  First Name <span class="asterisk"></span>
                </label>
                <input
                  className=" border-[1px] p-1 rounded-lg mb-2"
                  type="text"
                  placeholder="Enter First Name"
                  name="FNAME"
                  class="required text"
                  id="mce-FNAME"
                  // value=""
                  required=""
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-LNAME">Last Name </label>
                <input
                  className=" border-[1px] p-1 rounded-lg mb-2"
                  type="text"
                  placeholder="Enter Last Name"
                  name="LNAME"
                  class=" text"
                  id="mce-LNAME"
                  // value=""
                />
              </div>
              <div hidden="">
                <input type="hidden" name="tags" value="7422794" />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "5000px" }}
              >
                <input
                  type="text"
                  name="b_8def29671dd01fe1a232b6fd6_4d660e99ad"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  className="bg-primary p-2 rounded-2xl text-white my-3"
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
        <MailchimpScript />
        {/* <script type="text/javascript">
  (function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0]='EMAIL';ftypes[0]='email';
    fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';
    fnames[4]='PHONE';ftypes[4]='phone';
    }(jQuery));
    var $mcj = jQuery.noConflict(true)
  </script> */}
      </div>
      {/* </div> */}
      <p className="text-xs text-textGray">
        We care about your data in our privacy policy
      </p>
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
