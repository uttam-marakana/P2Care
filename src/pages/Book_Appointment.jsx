import React from "react";
import { MdVerified } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book_Appointment = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Doctor Information */}
          <div className="col-8 mx-2 my-2 border d-flex">
            <div className="mx-3 mt-3">
              <img className="img-fluid col-1" src={""} alt="Dr.picture" />
            </div>
            <div className="list-inline mt-3">
              <h3 className="list-inline-item">Dr. John Doe</h3>
              <span className="blockquote-footer fw-bold">
                Profile is Claimed
              </span>
              <p>MD, Psychiatry and Neurology</p>
              <p>
                Dental Surgeon, Aesthetic Dentist <br /> 19 Years Experience
                Overall
              </p>
              <p className="mb-1">
                <MdVerified /> Medical Registration Verified
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam dolorum praesentium expedita ipsa enim doloribus
                facere hic, asperiores, tenetur pariatur esse ab eligendi
                quibusdam voluptas.
              </p>
              <div className="ms-5 row">
                <Link className="text-primary border-bottom col-md-3 offset-md-9 mb-3">
                  Share Your Story
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="col-8 my-4 mx-2 border border-top-0">
            <div className="row nav nav-tabs my-3">
              <div className="col-md-2">
                <Link className="nav-link active text-dark" to="#">
                  Info
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="text-dark" to="#">
                  Stories (4)
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="text-dark" to="#">
                  Consult Q&A
                </Link>
              </div>
              <div className="col-md-2">
                <Link className="text-dark" to="#">
                  HealthFeed
                </Link>
              </div>
            </div>

            {/* Doctor Location and Details */}
            <div className="d-flex-start d-flex-block">
              <h5>Rajkot, Gujarat</h5>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 me-5">
                <span className="text-primary">Partha Dental Skin Hair</span>
                <p>
                  Above Union Bank, Next to Sri Chaitanya School, Beside
                  Marathahalli Flyover, Bengaluru - 560037, Landmark: Above
                  Union Bank, Bangalore
                </p>
              </div>
              <div className="col-md-2 me-5">
                <h5>Mon-Sun</h5>
                <p>10:00 AM - 9:00 PM</p>
              </div>
              <div className="col-md-4">
                <p>₹ 300</p>
                <span className="text-primary">
                  <h5>
                    Prime <MdVerified />
                  </h5>
                  <p>Max. 30 mins wait + Verified details</p>
                </span>
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="offset-md-8 col-3 mb-3">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book Appointment
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Clinic Appointment
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Stories */}
          <div className="col-8 mx-2 my-4 border">
            <div className="col-12 pt-2 pb-3 mb-5">
              <h4 className="border-bottom my-4">
                Patient Stories for Dr. Malathi Rajakumaran
              </h4>
              <li className="list-group-item d-flex ms-5 justify-content-between align-items-start">
                <div className="ms-2 me-auto border-bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="fw-bold">
                        <FaUser /> Vishal (Verified)
                      </h5>
                    </div>
                    <div className="col-md-2 offset-md-4">
                      <span className="text-success mb-3">3 months ago</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-body-secondary my-2">
                      I recommend the doctor Highly recommended!
                    </h5>
                    <p className="col-md-11 my-3">
                      My 6-year-old son had severe tooth pain, and I had a lot
                      of anxiety about going to the dentist. Then we visited
                      here, and Dr. Malathi was very helpful and patient in
                      understanding the problem my son was going through. She
                      made my son comfortable and did the treatment. We are very
                      happy with the doctor, and I highly recommend this doctor
                      for kids and elders too.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="col-8 mx-2 mt-1 border">
            <div className="col-12 pt-2 pb-3 mb-5">
              <h4 className="border-bottom my-4">Common questions & answers</h4>
              <div className="mx-5 list-group-numbered">
                <li className="list-group-item border-bottom my-3">
                  <div className="fw-bold">
                    Where does Dr. Malathi Rajakumaran practice?
                  </div>
                  Dr. Malathi Rajakumaran practices at Partha Dental Skin Hair -
                  Marathahalli.
                </li>
                <li className="list-group-item border-bottom my-3">
                  <div className="fw-bold">
                    How can I take Dr. Malathi Rajakumaran's appointment?
                  </div>
                  You can take Dr. Malathi Rajakumaran's appointment online
                  through Practo for an in-clinic visit with the doctor.
                </li>
                <li className="list-group-item border-bottom my-3">
                  <div className="fw-bold">
                    Why do patients visit Dr. Malathi Rajakumaran?
                  </div>
                  Patients frequently visit Dr. Malathi Rajakumaran for Oral
                  Rehabilitation, Discolored Tooth Restoration, and Jaw
                  Orthopedics. To see more reasons, visit the doctor's profile
                  on Practo.
                </li>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-8 mx-2 mt-1 border">
            <h5 className="my-3">
              Services <span className="text-primary mx-2">View all (51)</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book_Appointment;
