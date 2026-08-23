import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="bg-body-tertiary text-body-secondary py-5 mt-auto">
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-md-4">
            <h5 class="text-body-emphasis mb-3">BrandName</h5>
            <p class="small">
              Building robust web layouts efficiently with native utilities.
              Fully responsive and accessible by default.
            </p>
          </div>

          <div class="col-6 col-md-2">
            <h6 class="text-body-emphasis mb-3">Explore</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2">
            <h6 class="text-body-emphasis mb-3">Legal</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Privacy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Terms
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  License
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-4">
            <h6 class="text-body-emphasis mb-3">Subscribe to our newsletter</h6>
            <p class="small">
              Monthly digest of what's new and exciting from us.
            </p>
            <form class="d-flex flex-column flex-sm-row gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                class="form-control"
                placeholder="Email address"
                required
              />
              <button class="btn btn-primary flex-shrink-0" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-secondary-subtle">
          <p class="small">© 2026 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex gap-3">
            <li>
              <a class="text-body-secondary" href="#">
                Twitter
              </a>
            </li>
            <li>
              <a class="text-body-secondary" href="#">
                GitHub
              </a>
            </li>
            <li>
              <a class="text-body-secondary" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
