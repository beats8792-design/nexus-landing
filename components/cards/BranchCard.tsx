interface Props {
  title: string;
  address: string;
  phone: string;
  email: string;
}

export default function BranchCard({
  title,
  address,
  phone,
  email,
}: Props) {
  return (
    <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
      <h3 className="font-label-md text-label-md text-primary mb-3">
        {title}
      </h3>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-on-surface">Address</p>
          <p className="text-body-sm text-on-surface-variant">
            {address}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-on-surface">Phone</p>
          <a
            href={`tel:${phone.split(",")[0].trim()}`}
            className="text-body-sm text-primary hover:underline"
          >
            {phone}
          </a>
        </div>

        <div>
          <p className="text-sm font-medium text-on-surface">Email</p>
          <a
            href={`mailto:${email}`}
            className="text-body-sm text-primary hover:underline break-all"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}