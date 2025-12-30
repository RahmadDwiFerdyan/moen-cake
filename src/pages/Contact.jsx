export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold">
            Hubungi Kami
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Kami siap membantu pesanan dan pertanyaan Anda
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* INFO */}
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-1">Alamat Produksi</h3>
              <p className="text-gray-600">
                Jalan Kenikir No. 9<br />
                Malang, Jawa Timur
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Kontak</h3>
              <p className="text-gray-600">
                WhatsApp: <span className="font-medium">0881-9881-596</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Jam Operasional</h3>
              <p className="text-gray-600">
                Senin – Sabtu<br />
                08.00 – 17.00 WIB
              </p>
            </div>

            <a
              href="https://wa.me/6285795804537"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full mt-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Lokasi Produksi"
              src="https://www.google.com/maps?q=Jl.+Kenikir+No.+9,+Malang&output=embed"
              className="w-full h-90 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
