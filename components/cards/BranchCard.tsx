interface Props {
  title: string;
  branch?: string;
  address: string;
  phone: string[];
  email: string;
}

export default function BranchCard({
  title,
  address,
  phone,
  email,
  branch,
}: Props) {
  return (
    <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
      <h3 className="font-label-md text-label-md text-primary mb-3">
        {title}<br />
        {branch && <span>{branch}</span>}
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
          <div className="text-body-sm text-primary">
            {phone.map((item, index) => (
              <span key={item}>
                <a href={`tel:${item.trim()}`} className="hover:underline">
                  {item.trim()}
                </a>
                {index !== phone.length - 1 && ", "}
              </span>
            ))}
          </div>
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