"use client";
import styles from "./styles.module.css";
// import ImageViewer from "react-simple-image-viewer";

import { useCallback, useState } from "react";

import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}></div>
      <div className={styles.tko}>
        <Link href="/air">Воздух.</Link>
        <Link href="/tko">Отходы.</Link>
      </div>
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
