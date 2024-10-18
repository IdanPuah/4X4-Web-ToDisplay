import styles from "./TopPage.module.css";
import { HeadLine } from "./head_line/HeadLine.js";

function TopPage() {
    /*
        The top page of the home page, include the background video.
        The head line part include the logo, the title and the description
    */
    return(
            <div className={`row ${styles.customRow}   justify-content-center align-items-center`}>
                {/* Background video */}
                <video autoPlay muted loop className={` ${styles.backgroundVideo}`}>
                    <source src="/mp4/clip.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div>
                    <HeadLine />
                </div>
            </div>
        
    );
}
export { TopPage };