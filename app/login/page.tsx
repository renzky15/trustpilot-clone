"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-full flex flex-col items-center bg-[#faf9f6] px-4 py-7">
      <h1 className="text-[32px] font-extrabold text-[#2d2f29] text-center">
        Lesen Sie Bewertungen. Schreiben Sie Bewertungen. Finden Sie
        Unternehmen.
      </h1>
      <div className="bg-white rounded-lg border border-gray-300 p-10 w-full max-w-[620px] flex flex-col gap-3 items-center mt-5">
        <h2 className="text-lg font-bold mb-2">Hier einloggen oder anmelden</h2>
        <Button
          variant="outline"
          className="w-6/10 h-10 flex justify-between bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
        >
          <svg className="w-5 h-5 text-left" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Weiter mit Google
          <span className="w-1/12"></span>
        </Button>

        {/* Facebook Login Button */}
        <Button className="w-6/10 h-10 flex justify-between bg-[#1877F2] hover:bg-[#166FE5] text-white text-base font-extrabold">
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Weiter mit Facebook
          <span className="w-1/12"></span>
        </Button>

        {/* Apple Login Button */}
        <Button className="w-6/10 flex justify-between h-10 bg-black hover:bg-gray-800 text-white text-base font-medium">
          <svg
            className="w-10 h-10 -ml-2"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M19.8196726,13.1384615 C20.902953,13.1384615 22.2608678,12.406103 23.0695137,11.4296249 C23.8018722,10.5446917 24.3358837,9.30883662 24.3358837,8.07298156 C24.3358837,7.9051494 24.3206262,7.73731723 24.2901113,7.6 C23.0847711,7.64577241 21.6353115,8.4086459 20.7656357,9.43089638 C20.0790496,10.2090273 19.4534933,11.4296249 19.4534933,12.6807374 C19.4534933,12.8638271 19.4840083,13.0469167 19.4992657,13.1079466 C19.5755531,13.1232041 19.6976128,13.1384615 19.8196726,13.1384615 Z M16.0053051,31.6 C17.4852797,31.6 18.1413509,30.6082645 19.9875048,30.6082645 C21.8641736,30.6082645 22.2761252,31.5694851 23.923932,31.5694851 C25.5412238,31.5694851 26.6245041,30.074253 27.6467546,28.6095359 C28.7910648,26.9312142 29.2640464,25.2834075 29.2945613,25.2071202 C29.1877591,25.1766052 26.0904927,23.9102352 26.0904927,20.3552448 C26.0904927,17.2732359 28.5316879,15.8848061 28.6690051,15.7780038 C27.0517133,13.4588684 24.5952606,13.3978385 23.923932,13.3978385 C22.1082931,13.3978385 20.6283185,14.4963764 19.6976128,14.4963764 C18.6906198,14.4963764 17.36322,13.4588684 15.7917006,13.4588684 C12.8012365,13.4588684 9.765,15.9305785 9.765,20.5993643 C9.765,23.4982835 10.8940528,26.565035 12.2824825,28.548506 C13.4725652,30.2268277 14.5100731,31.6 16.0053051,31.6 Z"
            />
          </svg>
          Mit Apple anmelden
          <span className="w-1/12"></span>
        </Button>

        {/* Email Link */}
        <div className="text-center pt-2">
          <Link
            href="/email-login"
            className="text-[#3c57bc] hover:text-[#4c69d3] underline font-normal text-base hover:no-underline"
          >
            Weiter mit E-Mail-Adresse
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 p-6 max-w-xl">
        <h2 className="text-[32px] font-extrabold text-[#2d2f29] mb-2">
          Sind Sie ein Unternehmen?
        </h2>
        <p className="text-[#605e56] font-medium text-sm mb-4 text-center">
          Richten Sie Ihren kostenfreien Business-Account auf Trustpilot ein
        </p>
        <div className="flex gap-4 justify-center w-full">
          <Button className="h-8 rounded-full bg-[#3c57bc] text-white font-bold text-xs hover:bg-[#f0f4fa] hover:text-black transition-colors">
            Einloggen
          </Button>
          <Button className="h-8 rounded-full border border-[#3c57bc] text-[#3c57bc] font-bold text-xs hover:bg-[#f0f4fa] hover:border-transparent hover:text-black transition-colors">
            Anmelden
          </Button>
        </div>
      </div>
    </div>
  );
}
