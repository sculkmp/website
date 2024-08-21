import { Card, Button, Spacer } from "@nextui-org/react";
import { CardBody, CardHeader } from "@nextui-org/card";
import { LucideRefreshCcw } from "lucide-react";
import React from "react";
import { SEO } from "@/layouts/SEO";

export default function MaintenancePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <SEO title={"Maintenance"} description={"Steve is in a tough spot! The Warden is chasing him and we're fixing things behind the scenes. Please bear with us while we get everything back on track. Thanks for your patience!"} />
      <Card className="max-w-xl p-8 text-center shadow-lg border-4 border-cyan-900">
        <CardHeader className="flex justify-center mb-4">
          <img
            src="/maintenance.webp"
            alt="Steve running from a Warden"
          />
        </CardHeader>
        <CardBody>
          <h1 className="mb-4 text-3xl font-bold text-center text-white">
            Steve’s in Trouble!
          </h1>
          <p className="text-2xl font-semibold text-cyan-600 text-center mb-6">
            The Warden is right behind him! We’re working on getting things back in shape. Hang tight!
          </p>
          <Spacer y={1.5} />
          <Button
            className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-cyan-950 hover:bg-cyan-900 hover:opacity-30 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-cyan-900"
            startContent={<LucideRefreshCcw />}
            onClick={() => window.location.reload()}
          >
            back into darkness
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
