import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { GalleryImage } from "../";
import { Link } from "react-router-dom";
import "./index.css";
Modal.setAppElement("#root");

export default function ShowGallery() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const openModal = (show) => {
    setSelectedShow(show);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  useEffect(() => {
    async function displayShows() {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setShows(data);
    }

    displayShows();
  }, []);

  return (
    <main>
      <div className="shows">
        {shows.map((show) => (
          <div className="gallery-image" key={show.id}>
            <img
              src={show.image.medium}
              alt={show.name}
              onClick={() => openModal(show)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedShow}
        onRequestClose={closeModal}
        contentLabel="Show Modal"
        className="show-modal"
      >
        {selectedShow && (
          <div className="show-card">
            <div>
              <img
                className="img-modal"
                src={selectedShow.image.medium}
                alt={selectedShow.name}
              />
            </div>
            <div>
              <h2>{selectedShow.name}</h2>
              <br />
              {selectedShow.rating.average && (
                <span>[{selectedShow.rating.average}/10]</span>
              )}
              &nbsp;
              <em>
                {selectedShow.language}, {selectedShow.premiered}
              </em>
              <div
                dangerouslySetInnerHTML={{ __html: selectedShow.summary }}
              ></div>
            </div>
          </div>
        )}
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </main>
  );
}
