import { ButtonPrimary } from "./../../Components";

export const FAQSAccordeon = () => {
  return (
    <>
      {/* Container Accordeon */}
      <div>
        {/* <!-- Question 1 --> */}
        <div>
          <h3>What is Bookmark?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        {/* !-- Question 2 --> */}
        <div>
          <h3>How can I request a new browser?</h3>
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        {/* <!-- Question 3 --> */}
        <div>
          <h3>Is there a mobile app?</h3>
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        {/* <!-- Question 4 --> */}
        <div>
          <h3>What about other Chromium browsers?</h3>
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
        {/* Button */}
        <div>
          <ButtonPrimary type="typeOne" children="More Info" />
        </div>
      </div>
    </>
  );
};
