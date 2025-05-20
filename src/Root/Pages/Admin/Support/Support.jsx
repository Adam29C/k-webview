import React, { useState } from "react";

const Tessting = () => {
  const [image, setImage] = useState(null);
  const [text, settext] = useState("");
  // Handle file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save the uploaded image as base64 string
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };
  return (
    <>
      <div>
        {/* <div className="Image-Container position-relative">
          <div className="d-flex align-items-center text-light w-100 p-3">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
            <div className="d-flex flex-column align-items-center">
              <h2 className="mx-3 mb-0">Title</h2>
              <span className="">online</span>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="chat-container">
                <div className="chat-body d-flex flex-column">
                  <div className="message sent">
                    <p>hello abcdd</p>
                  </div>
                  <div className="text-muted small text-end">01:05 PM ✅</div>
                  <div className="message received">
                    <p>hello</p>
                  </div>
                  <div className="text-muted small text-start">01:15 PM</div>
                  <div className="message sent">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="text-muted small text-end">01:05 PM ✅</div>
                  <div className="message received">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="text-muted small text-start">01:15 PM</div>
                  <div className="message sent">
                    <p>hello</p>
                  </div>
                  <div className="text-muted small text-end">01:05 PM ✅</div>
                  <div className="message received">
                    <p>hello</p>
                  </div>
                  <div className="text-muted small text-start">01:15 PM</div>
                  <div className="message sent">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                  <div className="text-muted small text-end">01:05 PM ✅</div>
                  <div className="message received">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy.
                    </p>
                  </div>
                  <div className="text-muted small text-start">01:15 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-footer">
            <label htmlFor="uploadImage" className="uploadImg">
              <i className="fa-solid fa-upload"></i>
            </label>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <input
              onChange={(e) => settext(e.target.value)}
              type="text"
              placeholder="Type a message"
            />
            <button
              className={!text && "disabledbutton"}
              onClick={() => alert("send button")}
              disabled={text == ""}
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tessting;
