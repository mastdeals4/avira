type Props = {
  className?: string;
};

export default function MoleculeWatermark({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central hexagon ring */}
      <circle cx="450" cy="280" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="520" cy="240" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="520" cy="320" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="450" cy="360" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="380" cy="320" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="380" cy="240" r="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Central hex bonds */}
      <line x1="460" y1="276" x2="510" y2="244" stroke="currentColor" strokeWidth="1.5" />
      <line x1="530" y1="250" x2="530" y2="310" stroke="currentColor" strokeWidth="1.5" />
      <line x1="510" y1="326" x2="460" y2="354" stroke="currentColor" strokeWidth="1.5" />
      <line x1="440" y1="358" x2="390" y2="326" stroke="currentColor" strokeWidth="1.5" />
      <line x1="378" y1="310" x2="378" y2="250" stroke="currentColor" strokeWidth="1.5" />
      <line x1="390" y1="242" x2="440" y2="274" stroke="currentColor" strokeWidth="1.5" />

      {/* Upper-right satellite hexagon */}
      <circle cx="660" cy="160" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="710" cy="132" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="710" cy="188" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="660" cy="216" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="610" cy="188" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="610" cy="132" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="668" y1="156" x2="702" y2="136" stroke="currentColor" strokeWidth="1.5" />
      <line x1="718" y1="140" x2="718" y2="180" stroke="currentColor" strokeWidth="1.5" />
      <line x1="702" y1="192" x2="668" y2="212" stroke="currentColor" strokeWidth="1.5" />
      <line x1="652" y1="214" x2="618" y2="192" stroke="currentColor" strokeWidth="1.5" />
      <line x1="602" y1="180" x2="602" y2="140" stroke="currentColor" strokeWidth="1.5" />
      <line x1="618" y1="128" x2="652" y2="148" stroke="currentColor" strokeWidth="1.5" />
      {/* Bond connecting upper-right hex to central */}
      <line x1="610" y1="154" x2="528" y2="234" stroke="currentColor" strokeWidth="1.5" />

      {/* Lower-left satellite hexagon */}
      <circle cx="240" cy="400" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="290" cy="372" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="290" cy="428" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="240" cy="456" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="190" cy="428" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="190" cy="372" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="248" y1="396" x2="282" y2="376" stroke="currentColor" strokeWidth="1.5" />
      <line x1="298" y1="380" x2="298" y2="420" stroke="currentColor" strokeWidth="1.5" />
      <line x1="282" y1="432" x2="248" y2="452" stroke="currentColor" strokeWidth="1.5" />
      <line x1="232" y1="454" x2="198" y2="432" stroke="currentColor" strokeWidth="1.5" />
      <line x1="182" y1="420" x2="182" y2="380" stroke="currentColor" strokeWidth="1.5" />
      <line x1="198" y1="368" x2="232" y2="388" stroke="currentColor" strokeWidth="1.5" />
      {/* Bond connecting lower-left hex to central */}
      <line x1="290" y1="390" x2="378" y2="318" stroke="currentColor" strokeWidth="1.5" />

      {/* Upper-left loose atoms */}
      <circle cx="180" cy="120" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="240" cy="90" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="300" cy="120" r="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="187" y1="124" x2="233" y2="94" stroke="currentColor" strokeWidth="1.5" />
      <line x1="247" y1="94" x2="293" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="300" y1="128" x2="380" y2="230" stroke="currentColor" strokeWidth="1.5" />

      {/* Lower-right loose atoms */}
      <circle cx="680" cy="420" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="740" cy="390" r="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="687" y1="416" x2="733" y2="394" stroke="currentColor" strokeWidth="1.5" />
      <line x1="672" y1="418" x2="528" y2="328" stroke="currentColor" strokeWidth="1.5" />

      {/* Small dot accents */}
      <circle cx="100" cy="280" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="800" cy="280" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="450" cy="80" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="450" cy="490" r="5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="105" y1="280" x2="180" y2="320" stroke="currentColor" strokeWidth="1" />
      <line x1="795" y1="280" x2="710" y2="200" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
