export default function ContactSection() {
    return (
      <section className="mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="space-y-4">
            <ContactItem label="Email" value="contact@alexparent.dev" />
            <ContactItem label="Téléphone" value="+33 6 12 34 56 78" />
            <ContactItem label="Localisation" value="Paris, France" />
            <ContactItem label="Disponibilité" value="Ouvert aux nouvelles opportunités" />
          </div>
        </div>
      </section>
    );
  }
  
  const ContactItem = ({ label, value }) => (
    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
      <span className="text-gray-500">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );