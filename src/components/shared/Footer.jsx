/** @format */

import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-purple-200">
        <div>
          <img src="/logo.png" className="w-20 rounded-full" alt="logo" />
          <p className="font-semibold">
            Toys Zone Ltd.
            <br />
            We provide our best service with a best promise.
          </p>
          <p>&copy; 2023 All Right Reserved </p>
          <div className="flex gap-4 text-2xl my-4 text-purple-900">
            <FaFacebookSquare className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
        <div>
          <span className="footer-title">Our Company</span>
          <a className="link link-hover">About Us </a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">New Products</a>
          <a className="link link-hover">Best Sales</a>
        </div>
        <div>
          <span className="footer-title">Products</span>
          <a className="link link-hover">Factory</a>
          <a className="link link-hover">New Products</a>
          <a className="link link-hover">Best Sellers</a>
          <a className="link link-hover">Stores Sitemap</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
