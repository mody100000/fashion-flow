import Container from "../../components/common/Container";
import styles from "./Landing.module.css";
import { clsx } from "clsx";
const LandingPage = () => {
  const APP_NAME = "Electron";
  return (
    <main>
      <div className={styles.main}>
        {/* Start header */}
        <div className="h-[70vh] flex flex-col bg-zinc-900 items-center pt-24 overflow-hidden relative">
          <Container className="flex flex-col gap-12 z-20 relative">
            {/* <div className={styles.shadow}></div> */}
            <div className={styles.shadow2}></div>
            <h1 className="text-center flex flex-col gap-4 font-c font-bold text-3xl text-white md:text-6xl">
              <span>{APP_NAME} is a CMS for managing and</span>
              <span
                className={clsx(
                  "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-secondary-1 "
                )}
              >
                storing clothing store data in an efficient way
              </span>
            </h1>

            <p className="text-white text-lg capitalize md:text-3xl text-center">
              take your business to the next level
            </p>
          </Container>
          <div className={styles.shapeDivider}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
        </div>
        {/* end header */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
};

export default LandingPage;
