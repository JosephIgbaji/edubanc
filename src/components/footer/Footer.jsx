import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="md:px-32 px-20 py-5 bg-[#101828]">
      <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:justify-between">
        <div className="max-w-[280px]">
          <Link href="/">
            <div className="flex items-center">
              <svg
                width="59"
                height="39"
                viewBox="0 0 59 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.61631 12.4542L0.128192 11.9122L29.0917 0.965459L58.1945 11.5678L29.2309 22.5137L3.27905 13.06L3.36265 26.0034C3.61126 26.1343 3.83699 26.32 4.02752 26.5502C4.41316 27.0187 4.65541 27.6654 4.66001 28.377L4.68839 32.7702L0.46568 32.7953L0.437307 28.4029C0.432711 27.6913 0.666595 27.0417 1.04615 26.5687C1.23305 26.3362 1.45701 26.1479 1.70326 26.0149L1.61631 12.4542Z"
                  fill="#426AF2"
                />
                <circle cx="28.2557" cy="24.3602" r="14.4706" fill="#426AF2" />
                <circle cx="16.1825" cy="12.783" r="2.06722" fill="white" />
                <path
                  d="M38.0037 29.8679C36.8279 31.2752 35.3178 32.4035 33.5948 33.1623C31.8717 33.9211 29.9837 34.2893 28.0821 34.2373C26.1805 34.1853 24.3183 33.7147 22.645 32.8631C20.9717 32.0114 19.5338 30.8025 18.4467 29.3334C17.3597 27.8643 16.6537 26.1759 16.3854 24.4035C16.1171 22.6313 16.2941 20.8245 16.902 19.1282C17.51 17.4319 18.532 15.8933 19.8861 14.6359C21.2402 13.3784 22.8887 12.4372 24.6992 11.8877C22.3661 12.4273 20.2412 13.5731 18.5668 15.1944C16.8925 16.8157 15.736 18.8472 15.2295 21.0571C14.723 23.2671 14.8867 25.5665 15.7021 27.6931C16.5175 29.8198 17.9516 31.6878 19.8409 33.0844C21.7302 34.481 23.9986 35.3498 26.3873 35.5916C28.776 35.8334 31.1888 35.4386 33.3506 34.4521C35.5123 33.4656 37.3359 31.9273 38.6133 30.0125C39.8906 28.0978 40.5703 25.8837 40.575 23.623C40.4034 25.9003 39.5074 28.0763 38.0037 29.8679Z"
                  fill="white"
                />
                <path
                  d="M22.7681 11.457C24.3858 10.7696 26.1552 10.4541 27.9339 10.5359C29.7127 10.6177 31.4515 11.0944 33.0108 11.9278C34.5701 12.7612 35.9064 13.9281 36.9126 15.3348C37.9187 16.7416 38.5667 18.3491 38.8045 20.0283C39.0423 21.7073 38.8633 23.4115 38.2819 25.0038C37.7004 26.5961 36.7327 28.0323 35.4564 29.1971C34.1801 30.3619 32.6308 31.2229 30.9327 31.711C29.2346 32.1992 27.435 32.3008 25.6784 32.0078C27.8655 32.5262 30.1545 32.4516 32.2844 31.7924C34.4144 31.1334 36.2994 29.9163 37.7245 28.2802C39.1496 26.644 40.0574 24.6546 40.3443 22.539C40.6313 20.4233 40.2858 18.2666 39.3473 16.3148C38.4088 14.363 36.915 12.6947 35.0365 11.5003C33.1579 10.3059 30.9702 9.63343 28.7228 9.55963C26.4755 9.48584 24.2591 10.0136 22.3263 11.0828C20.3937 12.1521 18.8225 13.7197 17.7921 15.6068C18.969 13.7752 20.7029 12.3293 22.7681 11.457Z"
                  fill="white"
                />
                <path
                  d="M21.9794 22.9113L20.8173 24.0593C20.5926 24.2813 20.5982 24.6359 20.8298 24.8512C20.9433 24.9568 21.09 25.0093 21.2367 25.0093C21.3892 25.0093 21.5416 24.9524 21.6561 24.8392L22.8183 23.6912C23.0429 23.4692 23.0374 23.1146 22.8057 22.8993C22.574 22.6839 22.2041 22.6893 21.9794 22.9113Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
                <path
                  d="M26.0453 23.2744C25.7226 23.2744 25.4609 23.5251 25.4609 23.8344V28.7626C25.4609 29.0719 25.7226 29.3226 26.0453 29.3226H26.0453C26.368 29.3226 26.6297 29.0719 26.6297 28.7626L26.6296 23.8344C26.6296 23.5251 26.368 23.2744 26.0453 23.2744Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
                <path
                  d="M33.8873 14.9854H32.1342C31.8115 14.9854 31.5498 15.2361 31.5498 15.5454C31.5498 15.8547 31.8115 16.1054 32.1342 16.1054H33.6744L29.3835 20.2166C29.2684 20.327 29.1177 20.3897 28.9688 20.3897C28.9656 20.3897 28.9624 20.3897 28.9593 20.3896C28.8158 20.387 28.6692 20.324 28.5571 20.2166L27.8701 19.5582C27.5337 19.2358 27.0872 19.049 26.645 19.0455C26.6407 19.0455 26.6364 19.0455 26.6321 19.0455C26.1744 19.0455 25.7173 19.2372 25.3756 19.5729L24.1234 20.7784C23.8957 20.9976 23.8965 21.3522 24.1252 21.5704C24.2392 21.6792 24.3883 21.7335 24.5375 21.7335C24.6874 21.7335 24.8374 21.6785 24.9516 21.5686L26.2062 20.3609C26.2079 20.3593 26.2096 20.3576 26.2113 20.356C26.3333 20.2355 26.4923 20.1641 26.6354 20.1655C26.7716 20.1666 26.9242 20.2356 27.0437 20.3501L27.7308 21.0085C28.0594 21.3235 28.488 21.5014 28.9376 21.5094C29.4051 21.5178 29.8692 21.3352 30.21 21.0086L34.4717 16.9253V18.3174C34.4717 18.6267 34.7333 18.8775 35.056 18.8775C35.3788 18.8775 35.6404 18.6267 35.6404 18.3174V16.6654C35.6404 15.739 34.854 14.9854 33.8873 14.9854Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
                <path
                  d="M22.3793 25.792C22.0558 25.7909 21.793 26.042 21.793 26.352V28.7601C21.793 29.0693 22.0546 29.3201 22.3773 29.3201H22.3774C22.7001 29.3201 22.9617 29.0694 22.9617 28.7601V26.352C22.9617 26.0435 22.7013 25.793 22.3793 25.792Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
                <path
                  d="M33.8598 19.7744C33.537 19.7744 33.2754 20.0251 33.2754 20.3344V28.7627C33.2754 29.0719 33.537 29.3227 33.8598 29.3227H33.8598C34.1825 29.3227 34.4441 29.072 34.4441 28.7627V20.3344C34.4441 20.0251 34.1825 19.7744 33.8598 19.7744Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
                <path
                  d="M29.9242 22.7412C29.6015 22.7412 29.3398 22.9919 29.3398 23.3012V28.7614C29.3398 29.0706 29.6015 29.3214 29.9242 29.3214H29.9242C30.2469 29.3214 30.5086 29.0707 30.5086 28.7614V23.3012C30.5086 22.9919 30.247 22.7412 29.9242 22.7412Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.248067"
                />
              </svg>
              <svg
                width="58"
                height="11"
                viewBox="0 0 58 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.12064 10.7888C0.501729 10.7888 0 10.2871 0 9.66816V1.12065C0 0.50173 0.50173 0 1.12065 0H5.93109C6.55001 0 7.05174 0.512288 7.05174 1.1312C7.05174 1.75012 6.55001 2.26241 5.93109 2.26241H3.73016C3.18884 2.26241 2.75002 2.70123 2.75002 3.24254C2.75002 3.78385 3.18884 4.22267 3.73016 4.22267H5.06307C5.68198 4.22267 6.18371 4.73496 6.18371 5.35387C6.18371 5.97279 5.68198 6.48507 5.06307 6.48507H3.77069C3.20699 6.48507 2.75002 6.94204 2.75002 7.50574C2.75002 8.06943 3.20699 8.5264 3.77069 8.5264H6.14618C6.76509 8.5264 7.26682 9.03869 7.26682 9.6576C7.26682 10.2765 6.76509 10.7888 6.14618 10.7888H1.12064Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M7.52998 6.89776C7.52998 5.67935 7.8731 4.69922 8.55932 3.95737C9.25067 3.2106 10.1417 2.83722 11.2325 2.83722C11.5398 2.83722 11.8215 2.85933 12.0775 2.90354C12.3336 2.94285 12.5358 2.99443 12.6844 3.0583C12.838 3.11726 12.966 3.17867 13.0684 3.24254C13.176 3.30149 13.2502 3.35062 13.2912 3.38993L13.3468 3.44989C13.3505 3.45394 13.3558 3.45625 13.3613 3.45625C13.3731 3.45625 13.3823 3.44606 13.3812 3.43432C13.3724 3.34094 13.368 3.23279 13.368 3.10989V1.12065C13.368 0.501731 13.8698 0 14.4887 0H14.9744C15.5933 0 16.095 0.50173 16.095 1.12065V9.66816C16.095 10.2871 15.5933 10.7888 14.9744 10.7888H14.0606C13.7757 10.7888 13.5447 10.5578 13.5447 10.2729L13.5593 9.85856C13.5597 9.84741 13.5508 9.83815 13.5396 9.83815C13.5332 9.83815 13.5271 9.84131 13.5235 9.84662C13.5036 9.87544 13.4774 9.91438 13.4448 9.96343C13.409 10.0126 13.3219 10.1035 13.1837 10.2361C13.0454 10.3638 12.8943 10.4793 12.7304 10.5825C12.5666 10.6807 12.3464 10.7692 12.0698 10.8478C11.7933 10.9313 11.4988 10.973 11.1864 10.973C10.0905 10.973 9.20714 10.5972 8.53628 9.84552C7.86542 9.09384 7.52998 8.11126 7.52998 6.89776ZM10.2723 6.89776C10.2723 7.47749 10.4183 7.94176 10.7102 8.29058C11.0021 8.6394 11.3862 8.81381 11.8624 8.81381C12.308 8.81381 12.6818 8.65168 12.9839 8.32743C13.2912 8.00317 13.4448 7.52662 13.4448 6.89776C13.4448 6.39173 13.3066 5.95693 13.03 5.59338C12.7535 5.22491 12.3643 5.04067 11.8624 5.04067C11.4169 5.04067 11.0405 5.20771 10.7332 5.54179C10.426 5.87096 10.2723 6.32295 10.2723 6.89776Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M17.0616 8.05476V4.13473C17.0616 3.51582 17.5633 3.01409 18.1823 3.01409H18.6603C19.2792 3.01409 19.7809 3.51582 19.7809 4.13473V7.57575C19.7809 8.25864 20.0703 8.60009 20.6489 8.60009C21.2071 8.60009 21.6322 8.39866 21.9241 7.9958C22.216 7.58803 22.3619 7.07463 22.3619 6.4556V4.13473C22.3619 3.51582 22.8637 3.01409 23.4826 3.01409H23.9606C24.5795 3.01409 25.0812 3.51582 25.0812 4.13473V9.66816C25.0812 10.2871 24.5795 10.7888 23.9606 10.7888H23.1475C22.773 10.7888 22.4695 10.4853 22.4695 10.1108L22.499 9.64398C22.4996 9.63339 22.4912 9.62444 22.4806 9.62444C22.4738 9.62444 22.4675 9.62826 22.4643 9.63432C22.249 10.0424 21.9127 10.3683 21.4555 10.6119C20.9946 10.8527 20.4902 10.973 19.9422 10.973C19.5223 10.973 19.1433 10.9215 18.8053 10.8183C18.4725 10.72 18.1703 10.5604 17.8989 10.3393C17.6326 10.1182 17.4252 9.81604 17.2767 9.43284C17.1333 9.04471 17.0616 8.58535 17.0616 8.05476Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M26.6484 10.0642C26.6484 10.4648 26.9732 10.7896 27.3739 10.7896H27.5339C27.8462 10.7896 28.0994 10.5365 28.0994 10.2242C28.0994 9.94509 28.0777 9.72917 28.0703 9.66386C28.069 9.65294 28.0776 9.64344 28.0886 9.64344C28.0953 9.64344 28.1009 9.64618 28.1042 9.65195C28.1698 9.76529 28.9085 10.973 30.607 10.973C32.7046 10.973 34.2345 9.38363 34.2345 6.9231C34.2345 4.52371 32.8781 2.87316 30.7332 2.87316C28.947 2.87316 28.2465 4.06367 28.1831 4.17859C28.1798 4.18457 28.174 4.18748 28.1672 4.18748C28.1563 4.18748 28.1478 4.17806 28.1489 4.16722C28.156 4.09713 28.1783 3.85153 28.1783 3.53032V0.764909C28.1783 0.342461 27.8358 0 27.4133 0C26.9909 0 26.6484 0.342462 26.6484 0.76491V10.0642ZM28.1309 6.95367C28.1309 4.98219 29.2349 4.1722 30.4336 4.1722C31.7584 4.1722 32.6889 5.25728 32.6889 6.93839C32.6889 8.69591 31.648 9.70457 30.3862 9.70457C28.8722 9.70457 28.1309 8.32912 28.1309 6.95367Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M34.6846 8.61949C34.6846 10.1631 36.0252 10.973 37.3973 10.973C39.2168 10.973 39.8893 9.58381 39.948 9.4544C39.9509 9.44796 39.9569 9.44476 39.9639 9.44476C39.9745 9.44476 39.9827 9.45391 39.9816 9.46442C39.9744 9.53115 39.9523 9.76139 39.9523 10.0561V10.0799C39.9523 10.4719 40.27 10.7896 40.662 10.7896C41.0539 10.7896 41.3717 10.4719 41.3717 10.0799V5.89916C41.3717 3.94296 40.2362 2.87316 38.2174 2.87316C37.0737 2.87316 36.195 3.23154 35.697 3.50021C35.4217 3.64872 35.3531 3.99052 35.5104 4.26094C35.7003 4.58768 36.1393 4.68112 36.4805 4.51849C36.8852 4.32556 37.4568 4.12635 38.0913 4.12635C39.1006 4.12635 39.8419 4.55427 39.8419 5.82274C39.8419 5.89871 39.7803 5.96029 39.7043 5.96029H39.4949C38.1543 5.96029 34.6846 6.06727 34.6846 8.61949ZM36.2302 8.54308C36.2302 7.15234 38.312 7.07593 39.4634 7.07593H39.6131C39.7482 7.07593 39.8576 7.18541 39.8576 7.32046C39.8576 8.46666 39.0218 9.78098 37.7285 9.78098C36.7349 9.78098 36.2302 9.16967 36.2302 8.54308Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M42.3695 10.0247C42.3695 10.4472 42.712 10.7896 43.1344 10.7896C43.5569 10.7896 43.8993 10.4472 43.8993 10.0247V7.16763C43.8993 6.78556 43.9309 6.43405 44.0255 6.1284C44.3567 5.01275 45.3345 4.23333 46.5489 4.23333C47.8264 4.23333 48.063 5.08917 48.063 6.17425V10.0247C48.063 10.4472 48.4054 10.7896 48.8279 10.7896C49.2503 10.7896 49.5928 10.4472 49.5928 10.0247V5.83802C49.5928 3.86654 48.7254 2.87316 46.8486 2.87316C45.1223 2.87316 44.1769 3.96263 43.8568 4.63592C43.8538 4.64218 43.8476 4.64597 43.8406 4.64597C43.8299 4.64597 43.8216 4.6367 43.8227 4.62603C43.8299 4.55971 43.852 4.33614 43.852 4.0805V3.79781C43.852 3.38843 43.5201 3.05656 43.1108 3.05656C42.7014 3.05656 42.3695 3.38843 42.3695 3.79781V10.0247Z"
                  fill="#9FA3B0"
                />
                <path
                  d="M50.5401 6.9231C50.5401 9.24609 52.3065 10.973 54.8142 10.973C56.2444 10.973 57.2131 10.3888 57.6794 10.023C57.8823 9.86389 57.9144 9.58422 57.7873 9.35992C57.5875 9.00742 57.0876 8.93707 56.7429 9.15C56.3119 9.41619 55.6845 9.68929 54.9246 9.68929C53.2686 9.68929 52.1015 8.48195 52.1015 6.90782C52.1015 5.31841 53.2686 4.15692 54.8773 4.15692C55.542 4.15692 56.0855 4.36981 56.4669 4.58693C56.8137 4.78433 57.2981 4.73839 57.5265 4.41118C57.6934 4.17217 57.6719 3.8519 57.4368 3.67951C56.9812 3.34535 56.1084 2.87316 54.8142 2.87316C52.3065 2.87316 50.5401 4.63068 50.5401 6.9231Z"
                  fill="#9FA3B0"
                />
              </svg>
            </div>
          </Link>
          <p className="text-textGray text-xs mt-10">
            Beacon of innovation that caters to the unique needs of the
            education sector.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-textGray">Company</p>
          <Link className="text-white text-sm" href="/about">
            About Us
          </Link>
          <Link className="text-white text-sm" href="/products">
            Products
          </Link>
          <Link className="text-white text-sm" href="/services">
            Services
          </Link>
          <Link className="text-white text-sm" href="/blog">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-textGray">Legal</p>
          <Link className="text-white text-sm" href="/">
            Terms & Conditions
          </Link>
          <Link className="text-white text-sm" href="/">
            Privacy Policy
          </Link>
          <Link className="text-white text-sm" href="/">
            Cookies
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-textGray">Contact Us</p>
          <p className="text-white text-sm"> Help Center</p>
          <Link className="text-white text-sm" href="/">
            hello@edubanc.ng
          </Link>
          <p className="text-white text-sm">Careline 1 - 09047309006</p>
          <p className="text-white text-sm">Careline 2 - 09071934474</p>
          <p className="text-white text-sm">Got a Complaint?</p>
        </div>
      </div>

      <div className="py-[48px] flex flex-col sm:flex-row items-center justify-between">
        <p className="text-textGray">© 2023 Edubanc. All rights reserved.</p>
        <div className="flex mt-4 items-center gap-4">
          <Link href="https://www.twitter.com" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55016 21.7507C16.6045 21.7507 21.5583 14.2474 21.5583 7.74259C21.5583 7.53166 21.5536 7.31603 21.5442 7.10509C22.5079 6.40819 23.3395 5.54499 24 4.55603C23.1025 4.95533 22.1496 5.21611 21.1739 5.32947C22.2013 4.71364 22.9705 3.7462 23.3391 2.6065C22.3726 3.17929 21.3156 3.58334 20.2134 3.80134C19.4708 3.01229 18.489 2.48985 17.4197 2.31478C16.3504 2.13972 15.2532 2.32178 14.2977 2.83283C13.3423 3.34387 12.5818 4.15544 12.1338 5.14204C11.6859 6.12865 11.5754 7.23535 11.8195 8.29103C9.86249 8.19282 7.94794 7.68444 6.19998 6.79883C4.45203 5.91323 2.90969 4.67017 1.67297 3.15025C1.0444 4.23398 0.852057 5.51638 1.13503 6.73682C1.418 7.95727 2.15506 9.02418 3.19641 9.72072C2.41463 9.6959 1.64998 9.48541 0.965625 9.10666V9.16759C0.964925 10.3049 1.3581 11.4073 2.07831 12.2875C2.79852 13.1677 3.80132 13.7713 4.91625 13.9957C4.19206 14.1939 3.43198 14.2227 2.69484 14.0801C3.00945 15.0582 3.62157 15.9136 4.44577 16.5271C5.26997 17.1405 6.26512 17.4813 7.29234 17.502C5.54842 18.8718 3.39417 19.6149 1.17656 19.6113C0.783287 19.6107 0.390399 19.5866 0 19.5392C2.25286 20.9845 4.87353 21.7521 7.55016 21.7507Z"
                fill="#98A2B3"
              />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_798_16496)">
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="#98A2B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_798_16496">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_798_16499)">
                <path
                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                  fill="#98A2B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_798_16499">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
