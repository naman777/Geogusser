export default function Appbar() {
    return(
        <div  className="inline-flex items-center justify-between gap-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/436f/44bc/f1763620bc3484816ae325031d184550?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agRapVkAelSkHoWXd1D79wRy2mam7sHBo1GMY-UHYbxxA7inSzLzpoufRCGmhfAQC3zHeuobJZEj1VoiOcMWkt0L1gE6QLHBNhGuLsDaFPeXYnPOLsv21xL8Dad20vJ1enn1CCPmiWULI0enja6sPTWk43UAquxYrFvj4idAHWHZqFKzn7GPVyGAmWU-NZlGX44mxN4gotjfBkFVBvexnSvr6YX3TNVslIlNDCn-kXw8VB~E3Cgvm-D-7YDV-RS00E2quB9uW1j3zHF-hKrEE9HlUTjKd1NMG4FTLKCbbHQneNJuDRE54s0aTC2pN-wdZUahAt3oaHinu2I08xXdXw__"
            alt="ACM Thapar"
            className="h-12 w-auto"
          />
            <h1
            style={{
            color: "#FFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: '"CorporationGames", sans-serif',
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "1.2px",
            }}
            >
                GEOGUESSER
            </h1>
        </div>
    )
}