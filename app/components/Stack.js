// Logos come from simple-icons' CDN and are drawn as CSS masks rather than <img>, so each
// glyph is painted in --accent and follows the light/dark theme. Entries without a `slug`
// (AWS services, which simple-icons dropped for trademark reasons, and concepts that have no
// mark at all) render as plain text chips.
const GROUPS = [
  {
    title: "Languages",
    items: [
      ["Python", "python"],
      ["TypeScript", "typescript"],
      ["JavaScript", "javascript"],
      ["C++", "cplusplus"],
      ["Solidity", "solidity"]
    ]
  },
  {
    title: "Backend & Systems",
    items: [
      ["FastAPI", "fastapi"],
      ["Django", "django"],
      ["Flask", "flask"],
      ["Node.js", "nodedotjs"],
      ["Express.js", "express"],
      ["REST APIs"],
      ["Async programming"],
      ["Pandas", "pandas"],
      ["NumPy", "numpy"]
    ]
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      ["AWS EC2"],
      ["AWS Lambda"],
      ["Serverless", "serverless"],
      ["CloudWatch"],
      ["Docker", "docker"]
    ]
  },
  {
    title: "Databases",
    items: [
      ["PostgreSQL", "postgresql"],
      ["MongoDB", "mongodb"],
      ["MySQL", "mysql"],
      ["DynamoDB"],
      ["Amazon Timestream"],
      ["Prisma", "prisma"],
      ["ORM"],
      ["SQLAlchemy"]
    ]
  },
  {
    title: "Blockchain & DeFi",
    items: [
      ["EVM", "ethereum"],
      ["Ethers.js", "ethers"],
      ["web3.py", "web3dotjs"],
      ["Hardhat"],
      ["Foundry"],
      ["ERC-20 / ERC-4626"],
      ["CPAMM / CLAMM"],
      ["Execution simulation"]
    ]
  },
  {
    title: "Frontend",
    items: [
      ["React", "react"],
      ["React Native", "react"],
      ["Redux", "redux"],
      ["Tailwind CSS", "tailwindcss"]
    ]
  }
];

export default function Stack() {
  return (
    <div className="stack">
      {GROUPS.map((g) => (
        <div className="stack-col" key={g.title}>
          <h3>{g.title}</h3>
          <div className="chips">
            {g.items.map(([name, slug]) => (
              <span className="chip" key={name}>
                {slug && (
                  <i
                    className="ico"
                    aria-hidden="true"
                    style={{ "--ico": `url(https://cdn.simpleicons.org/${slug})` }}
                  />
                )}
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
