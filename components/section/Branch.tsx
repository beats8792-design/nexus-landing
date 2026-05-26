import BranchCard from "@/components/cards/BranchCard";

const branchs = [
    {
        title: "NEXUS JAPANESE LANGUAGE ACADEMY",
        address: "Plot-21, Block-Ka, Section-6, Mirpur-10, Dhaka-1216",
        phone: ["+8801968666111", "+8801968666222"],
        email: "info@nexusgroupedu.com",
    },
    {
        title: "NEXUS JAPANESE LANGUAGE ACADEMY",
        branch: "Cumilla Branch",
        address:
            "M.R.I. Point Building, 4th Floor, Kandirpar, Badurtala, Cumilla",
        phone: ["+8801913832298", "+8801827806813"],
        email: "infonexusgroupcumilla@gmail.com",
    },
    {
        title: "NEXUS JAPANESE LANGUAGE ACADEMY",
        branch: "Kishoreganj Branch",
        address: "House#23, Road#7, Harua, Kishoreganj",
        phone: ["+8801968666111", "+8801968666222"],
        email: "info@nexusgroupedu.com",
    },
    {
        title: "NEXUS JAPANESE LANGUAGE ACADEMY",
        branch: "Munshiganj Branch",
        address:
            "Stadium West Gate, Hasan Market, 2nd Floor, College Road, Mathpara, Munshiganj",
        phone: ["+8801968666111", "+8801968666222"],
        email: "info@nexusgroupedu.com",
    },
];


export default function Branch() {
    return (
        <section className="py-16 md:py-20 px-4 container mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                        {branchs.map((card, index) => (
                            <BranchCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}