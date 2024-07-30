import { PrettyEmailWrap } from "../lib/main";
import styles from "./App.module.css";
import { UserProfile } from "./components/UserProfile/UserProfile.tsx";
import pictureSrc from "./images/profile-picture.png";

export const App = () => {
  return (
    <div>
      <h1>react-pretty-email-wrap</h1>
      <div className={styles.container}>
        <h3 className={[styles.h3, styles["mt-0"]].join(" ")}>
          Without <code>&lt;PrettyEmailWrap&nbsp;/&gt;</code>
        </h3>
        <UserProfile
          pictureSrc={pictureSrc}
          name="Napoleon Bonaparte"
          email="napoleon.bonaparte@emperor.gov.fr"
        />

        <h3 className={styles.h3}>
          With <code>&lt;PrettyEmailWrap&nbsp;/&gt;</code>
        </h3>
        <UserProfile
          pictureSrc={pictureSrc}
          name="Napoleon Bonaparte"
          email={
            <PrettyEmailWrap>napoleon.bonaparte@emperor.gov.fr</PrettyEmailWrap>
          }
        />
      </div>
    </div>
  );
};
