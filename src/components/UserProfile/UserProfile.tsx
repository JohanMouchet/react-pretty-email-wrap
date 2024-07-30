import styles from "./UserProfile.module.css";

export const UserProfile = ({
  pictureSrc,
  name,
  email,
}: {
  pictureSrc: string;
  name: string;
  email: React.ReactNode;
}) => {
  return (
    <div className={styles.userProfile}>
      <img
        src={pictureSrc}
        alt="Profile picture"
        width={52}
        height={52}
        className={styles.picture}
      />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.email}>{email}</div>
      </div>
    </div>
  );
};
