import { Suspense } from "react";
import { listRegions } from "@lib/data/regions";
import { StoreRegion } from "@medusajs/types";
import CartButton from "@modules/layout/components/cart-button"; // Still import CartButton here
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import ClientNav from "./ClientNav"; // Import the new client component

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions);

  // Render CartButton directly in the Server Component
  const cartButtonElement = (
    <Suspense
      fallback={
        <LocalizedClientLink // You might need LocalizedClientLink here if it's not a direct string
          className="hover:text-ui-fg-base flex gap-2"
          href="/cart"
          data-testid="nav-cart-link"
        >
          Cart (0)
        </LocalizedClientLink>
      }
    >
      <CartButton />
    </Suspense>
  );

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base shadow-lg">
        {/* Pass the rendered CartButton as a prop */}
        <ClientNav regions={regions} cartButton={cartButtonElement} />
      </header>
    </div>
  );
}