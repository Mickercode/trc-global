export type DoctrineGroup = {
  group: string;
  items: { title: string; desc: string }[];
};

export const BELIEFS: DoctrineGroup[] = [
  {
    group: "Foundations & Godhead",
    items: [
      { title: "The Holy Scriptures", desc: "The Bible is the inspired, infallible Word of God and our final authority." },
      { title: "The One True God", desc: "There is one God, eternally existing in three persons: Father, Son and Holy Spirit." },
      { title: "God the Father", desc: "The Father is the source of all things, holy, loving and sovereign over creation." },
      { title: "The Lord Jesus Christ", desc: "Jesus is fully God and fully man, the only Saviour and Lord." },
      { title: "The Holy Spirit", desc: "The Spirit convicts, regenerates, indwells and empowers every believer." },
    ],
  },
  {
    group: "Salvation & Grace",
    items: [
      { title: "The Fall of Man", desc: "All have sinned and fall short of the glory of God, separated by sin." },
      { title: "Salvation by Grace", desc: "Salvation is the free gift of God through faith in Jesus Christ alone." },
      { title: "Repentance & Faith", desc: "We turn from sin and trust wholly in Christ for forgiveness and new life." },
      { title: "The New Birth", desc: "Every believer is born again — made a new creation by the Spirit of God." },
      { title: "Justification", desc: "We are declared righteous before God on the basis of Christ's finished work." },
      { title: "Sanctification", desc: "Believers are set apart and progressively made holy by the Spirit and the Word." },
    ],
  },
  {
    group: "Christian Life & the Spirit",
    items: [
      { title: "Water Baptism", desc: "Believers are baptised in water as a public confession of faith in Christ." },
      { title: "The Lord's Supper", desc: "We remember Christ's death and proclaim Him until He comes." },
      { title: "Baptism in the Holy Spirit", desc: "An empowering experience for witness and service available to all believers." },
      { title: "Divine Healing", desc: "Healing is provided in the atonement and available to God's people today." },
      { title: "Holy Living", desc: "We are called to walk in love, holiness and obedience to God's Word." },
    ],
  },
  {
    group: "The Last Things",
    items: [
      { title: "The Church", desc: "The Church is the body of Christ, called to worship, fellowship and mission." },
      { title: "The Great Commission", desc: "We are sent to make disciples of all nations until Christ returns." },
      { title: "The Return of Christ", desc: "Jesus will return personally, visibly and gloriously for His Church." },
      { title: "The Resurrection", desc: "The dead in Christ will rise, and believers will be raised to eternal life." },
      { title: "Final Judgement", desc: "All people will give account before God, the righteous Judge." },
      { title: "Eternity", desc: "The redeemed will dwell with God forever; the lost are eternally separated from Him." },
    ],
  },
];
