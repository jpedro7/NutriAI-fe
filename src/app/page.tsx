import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative h-screen overflow-hidden bg-white dark:bg-gray-800 "
      style={{ overflow: "auto" }}
    >
      <header
        className="z-30 flex items-center w-full h-24 sm:h-32"
        style={{ backgroundColor: "#F7F3E7" }}
      >
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
            <svg
              width="141"
              height="30"
              viewBox="0 0 141 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6422 29.7345H17.3325L5.30973 11.5676V29.7345H0V3.22377H5.30973L17.3325 21.4286V3.22377H22.6422V29.7345Z"
                fill="#016241"
              />
              <path
                d="M45.8288 8.72314V29.7345H40.4811V27.0796C39.7984 27.9899 38.9008 28.7105 37.7883 29.2415C36.7011 29.7472 35.5127 30 34.2232 30C32.5797 30 31.1258 29.6587 29.8616 28.976C28.5974 28.268 27.5987 27.244 26.8654 25.9039C26.1575 24.5386 25.8035 22.9204 25.8035 21.0493V8.72314H31.1132V20.2908C31.1132 21.9595 31.5304 23.2491 32.3648 24.1593C33.1992 25.0443 34.337 25.4867 35.7782 25.4867C37.2447 25.4867 38.3951 25.0443 39.2295 24.1593C40.0639 23.2491 40.4811 21.9595 40.4811 20.2908V8.72314H45.8288Z"
                fill="#016241"
              />
              <path
                d="M55.3534 13.0847V23.2491C55.3534 23.957 55.5177 24.4753 55.8464 24.804C56.2004 25.1075 56.782 25.2592 57.5911 25.2592H60.0563V29.7345H56.7188C52.2434 29.7345 50.0057 27.5601 50.0057 23.2111V13.0847H47.5026V8.72314H50.0057V3.52718H55.3534V8.72314H60.0563V13.0847H55.3534Z"
                fill="#016241"
              />
              <path
                d="M67.2887 11.9848C67.9714 10.8723 68.8564 10 69.9436 9.36789C71.0561 8.73578 72.3203 8.41972 73.7363 8.41972V13.9949H72.333C70.6642 13.9949 69.4 14.3869 68.5403 15.1707C67.7059 15.9545 67.2887 17.3199 67.2887 19.2668V29.7345H61.979V8.72314H67.2887V11.9848Z"
                fill="#016241"
              />
              <path
                d="M78.1091 6.21998C77.1736 6.21998 76.3898 5.9292 75.7576 5.34766C75.1508 4.74083 74.8474 3.99494 74.8474 3.10999C74.8474 2.22503 75.1508 1.49178 75.7576 0.91024C76.3898 0.303413 77.1736 0 78.1091 0C79.0446 0 79.8158 0.303413 80.4226 0.91024C81.0547 1.49178 81.3708 2.22503 81.3708 3.10999C81.3708 3.99494 81.0547 4.74083 80.4226 5.34766C79.8158 5.9292 79.0446 6.21998 78.1091 6.21998ZM80.726 8.72314V29.7345H75.4163V8.72314H80.726Z"
                fill="#016241"
              />
              <path
                d="M99.6713 24.6901H89.1277L87.3831 29.7344H81.8079L91.3275 3.22363H97.5095L107.029 29.7344H101.416L99.6713 24.6901ZM98.2301 20.4423L94.3995 9.36776L90.5689 20.4423H98.2301Z"
                fill="#F48722"
              />
              <path
                d="M114.001 3.26156V29.7344H108.691V3.26156H114.001Z"
                fill="#F48722"
              />
              <path
                d="M121.403 5.46143H122.963C123.997 5.46143 124.988 5.86101 125.718 6.57227C126.449 7.28354 126.86 8.24822 126.86 9.25409H125.299C124.266 9.25409 123.275 8.85451 122.544 8.14325C121.814 7.43198 121.403 6.4673 121.403 5.46143Z"
                stroke="#F48722"
                stroke-width="2.7"
                stroke-miterlimit="10"
              />
              <path
                d="M129.032 8.49561H127.471C127.471 7.99755 127.572 7.50436 127.768 7.04421C127.964 6.58407 128.251 6.16597 128.613 5.81378C129.343 5.10252 130.334 4.70294 131.368 4.70294H132.928C132.928 5.70882 132.517 6.6735 131.787 7.38476C131.056 8.09602 130.065 8.49561 129.032 8.49561Z"
                stroke="#F48722"
                stroke-width="2.7"
                stroke-miterlimit="10"
              />
              <path
                d="M127.472 13.8433V8.49561"
                stroke="#F48722"
                stroke-width="2.7"
                stroke-miterlimit="10"
              />
              <path
                d="M119.214 28.5968H128.867C129.668 28.5974 130.461 28.4611 131.2 28.1958C131.94 27.9305 132.612 27.5413 133.178 27.0506C133.178 27.0506 141.46 24.6581 139.226 22.3389C136.991 20.0197 128.957 24.3781 128.957 24.3781H120.929C121.283 24.3776 128.5 24.3102 128.821 24.1808C129.142 24.0513 129.426 23.8627 129.655 23.6283C129.883 23.3939 130.049 23.1191 130.142 22.8233C130.235 22.5275 130.253 22.2176 130.194 21.9153C130.072 21.4109 129.75 20.9593 129.284 20.6386C128.819 20.318 128.238 20.1484 127.643 20.1593H122.874L121.688 19.6513C120.669 19.2137 119.527 19.0383 118.397 19.146C117.266 19.2536 116.196 19.6398 115.311 20.2587C114.621 20.7381 114.066 21.3472 113.689 22.0398C113.311 22.7325 112.67 23.612 112.68 24.3781"
                stroke="#F48722"
                stroke-width="2.7"
                stroke-miterlimit="10"
              />
              <path
                d="M132.456 22.5285C135.843 19.5486 134.96 14.3843 133.019 13.3619C130.904 12.2482 127.454 14.4455 127.454 14.4455C127.454 14.4455 124.267 12.4274 122.171 13.3619C120.139 14.2679 119.978 16.9939 120.557 19.1422"
                stroke="#F48722"
                stroke-width="2.7"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <nav
              className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex"
              style={{ color: "#016241" }}
            >
              <a href="#" className="flex px-6 py-2">
                Home
              </a>
              <a href="#" className="flex px-6 py-2">
                Sobre Nós
              </a>
              <a href="#" className="flex px-6 py-2">
                Contato
              </a>
              <a href="#" className="flex px-6 py-2">
                Entrar
              </a>
            </nav>
            <button className="flex flex-col ml-4 lg:hidden">
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800"
        style={{ backgroundColor: "#F7F3E7", width: "100%", height: "75%" }}
      >
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            {/* <Image
              src="../../public/nutriai.svg"
              // className="max-w-xs m-auto md:max-w-sm"
              alt="sadsd"
            /> */}
          </div>
        </div>
      </div>
      <div>
        <footer
          className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-2 dark:text-gray-200"
          style={{ backgroundColor: "#F48722" }}
        >
          <div className="flex flex-col">
            <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
            <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
              <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
                <a
                  aria-current="page"
                  href="#"
                  className="hover:text-gray-700 dark:hover:text-white"
                >
                  Components
                </a>
                <a
                  aria-current="page"
                  href="#"
                  className="hover:text-gray-700 dark:hover:text-white"
                >
                  Contacts
                </a>
                <a
                  aria-current="page"
                  href="#"
                  className="hover:text-gray-700 dark:hover:text-white"
                >
                  Customization
                </a>
              </nav>
              <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
              <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
                <a
                  className="hover:text-primary-gray-20"
                  href="https://github.com/Charlie85270/tail-kit"
                >
                  <span className="sr-only">View on GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a className="ml-4 hover:text-primary-gray-20" href="#">
                  <span className="sr-only">Settings</span>
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"></path>
                  </svg>
                </a>
              </div>
              <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
              <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
                <span className="">© 2021</span>
                <span className="mt-7 md:mt-1">
                  Created by
                  <a
                    className="underline hover:text-primary-gray-20"
                    href="https://www.linkedin.com/in/crabiller/"
                  >
                    Charlie
                  </a>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
