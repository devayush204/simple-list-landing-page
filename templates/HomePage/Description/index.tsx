import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section", styles.description)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <div className={cn("h1", styles.title)}>
                            Where simplicity meets productivity
                        </div>
                        <div className={styles.info}>
                            Create, manage, and conquer your to-do lists with
                            ease
                        </div>
                        <Button
                            className={styles.button}
                            title="Try it for free"
                            href="https://simple-list-delta.vercel.app/"
                        />
                        <div className={styles.version}>v1.0.1 – macOS 12+</div>
                    </div>
                    <div className={styles.preview}>
                        <Image
                            src="/images/description-pic.png"
                            width={762}
                            height={400}
                            alt=""
                        />
                        <div className={styles.stars}>
                            <Image
                                src="/images/description-stars.svg"
                                width={776}
                                height={360}
                                alt=""
                            />
                        </div>
                        <div className={styles.cursors}>
                            <Parallax
                                className={styles.cursor}
                                translateX={["-120px", "0px"]}
                                speed={5}
                            >
                                <Image
                                    src="/images/cursor.svg"
                                    width={17}
                                    height={17}
                                    alt=""
                                />
                                <div className={styles.tooltip}>Sagar</div>
                            </Parallax>
                            <Parallax
                                className={styles.cursor}
                                translateX={["90px", "0px"]}
                                speed={5}
                            >
                                <Image
                                    src="/images/cursor-1.svg"
                                    width={17}
                                    height={17}
                                    alt=""
                                />
                                <div className={styles.tooltip}>Ayush</div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
