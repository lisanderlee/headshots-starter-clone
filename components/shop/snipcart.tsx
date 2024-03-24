
import Script from "next/script";


export default function Snipcart() {
    
  return (
    <>
    <Script
    async
    src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
  />
 <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
    hidden
  >

  </div>
  </>
  );
}
