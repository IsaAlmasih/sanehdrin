"use client";
import styles from "./page.module.css";
// import ImageViewer from "react-simple-image-viewer";

import { useCallback, useState } from "react";

import Image from "next/image";

import Link from "next/link";
// import Slider from "@/components/slider/slider";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {/* <h2 className={styles.introText}>Избири жизнь!</h2> */}
      </div>
      <center>
        <Link href="/orsk">Проблемы города Орска.</Link>
        <h3 className={styles.videoText}></h3>
      </center>
      <div className={styles.section}>
        <footer className={styles.footer}>
          <div className={styles.footerCol}>
            <h5 className={styles.footerHeading}>ИНН 860501286008:</h5>
            <h5 className={styles.footerHeading}>ИНН 7731209949:</h5>
            <div className={styles.footerGroup}>
              {/* <p className={styles.footerText}>ИНН 000000000</p>
              <p className={styles.footerText}>КПП 000000000</p>
              <p className={styles.footerText}>БИГ БАНКА 000000000</p> */}
              <p className={styles.footerText}>tsarstvie.ru@gmail.com</p>
              <p className={styles.footerText}>
                <Link href="https://000000000000.ru">Матрица. Matrix</Link>
              </p>
              <p className={styles.footerText}>ТЕЛ: +7(910)415-98-76</p>
              <Link href="/keys">Приговоры.</Link>
            </div>
          </div>
          <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}










