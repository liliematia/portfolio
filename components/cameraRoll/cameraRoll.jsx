import styles from "./cameraRoll.module.css";

export default function CameraRoll(props) {
  return (
    <section className={styles.gallery}>
      {props.photos.map((value, index) => {
        let pathToImage = `/images/camera-roll/${value}`;
        return (
          <img
            src={pathToImage}
            alt={value}
            key={index}
            className={styles.image}
          />
        );
      })}
    </section>
  );
}
