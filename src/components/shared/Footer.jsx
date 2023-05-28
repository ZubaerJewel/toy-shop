/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faYoutube,faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

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
      <footer className="footer p-10 bg-black text-purple-500">
        <div>
          <img src="/logo.png" className="w-20 rounded-full" alt="logo" />
          <p className="font-semibold">
            Educational Toys Ltd.
            <br />
            We provide our best service with a best promise.
          </p>
          <p>&copy; 2023 All Right Reserved </p>
          <div className="flex gap-4 text-2xl my-4 text-purple-900">

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faInstagramSquare} className="cursor-pointer" />
</a>
<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYoutube} className="cursor-pointer" />
</a>
<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitterSquare} className="cursor-pointer" />
</a>

            {/* <FaFacebookSquare className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" /> */}
          </div>
        </div>
        <div>
          <span className="footer-title">Our Company</span>
          <a className="link link-hover">About Us </a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover"></a>
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
        <div>
        <span className="footer-title">Contact Us</span>
          <a className="">01839666712 </a>
          <a className="">01303407372</a>
          <a className="">zubaer5jewel.16@gmail.com</a>
          <a className="">jewel5zubaer.16@gmail.com</a>
          <a className="">Address: H/N-82,7470-Roypur,Bagherpara,Jashore</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
