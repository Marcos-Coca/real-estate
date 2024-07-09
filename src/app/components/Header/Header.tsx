"use client";

import { Heading } from "@ui/components/Heading";
import { Icon } from "@ui/components/Icon";
import { Button } from "@ui/forms/Button";
import { Flex } from "@ui/layout/Flex";
import Link from "next/link";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="">
        <Flex gap="2" align="center">
          <Icon size="lg" name="home-simple-door" color="primary" />
          <Heading as="h2" color="primary" size="lg">
            Home
          </Heading>
        </Flex>
      </a>

      <ul className={styles.linksList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Buy</Link>
        </li>
        <li>
          <Link href="/blog">Rent</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Button variant="outline">Post Property</Button>
      <Button color="secondary">Sign in</Button>
    </header>
  );
}
