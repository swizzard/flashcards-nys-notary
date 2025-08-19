const cards = {
  vocab: [
    {
      front: "Acknowledgment",
      back: "A formal declaration before a duly authorized officer by a person who has executed an instrument that such execution is his act and deed.",
    },
    {
      front: "Affiant",
      back: "The person who makes and subscribes his signature to an affidavit.",
    },
    {
      front: "Affidavit",
      back: "A signed statement, duly sworn to, by the maker thereof, before a notary public or other officer authorized to administer oaths.",
    },
    {
      front: "Administrator",
      back: " A person appointed by the court to manage the estate of a deceased person who left no will.",
    },
    {
      front: "Affirmation",
      back: "A solemn declaration made by persons who conscientiously decline taking an oath.",
    },
    {
      front: "Apostile",
      back: "Department of State authentication attached to a notarized and county certified document for possible international use.",
    },
    {
      front: "Attest",
      back: "To witness the execution of a written instrument, at the request of the person who makes it, and subscribe the same as a witness.",
    },
    {
      front: "Attestation Clause",
      back: "That clause (e.g., at the end of a will) wherein the witnesses certify that the instrument has been executed before them, and the manner of the execution of the same.",
    },
    {
      front: "Authentication",
      back: "A certificate subjoined by a county clerk to any certificate of proof or acknowledgment or oath signed by a notary; this county clerk’s certificate authenticates or verifies the authority of the notary public to act as such.",
    },
    {
      front: "Bill of Sale",
      back: "A written instrument given to pass title of personal property from vendor to vendee.",
    },
    {
      front: "Certified Copy",
      back: "A copy of a public record signed and certified as a true copy by the public official having custody of the original.",
    },
    {
      front: "Chattel",
      back: "Personal property, such as household goods or fixtures.",
    },
    {
      front: "Chattel Paper",
      back: "A writing or writings which evidence both an obligation to pay money and a security interest in a lease or specific goods.",
    },
    {
      front: "Codicil",
      back: "An instrument made subsequent to a will and modifying it in some respects.",
    },
    {
      front: "Consideration",
      back: "Anything of value given to induce entering into a contract; it may be money, personal services, or even love and affection.",
    },
    {
      front: "Contempt of Court",
      back: "Behavior disrespectful of the authority of a court which disrupts the execution of court orders.",
    },
    {
      front: "Contract",
      back: "An agreement between competent parties to do or not to do certain things for a legal consideration, whereby each party acquires a right to what the other possesses.",
    },
    {
      front: "Conveyance (Deed)",
      back: "Every instrument, in writing, except a will, by which any estate or interest in real property is created, transferred, assigned or surrendered.",
    },
    {
      front: "County Clerk’s Certificate",
      back: "This document authenticates or verifies the authority of the notary public to act as such.",
    },
    {
      front: "Deponent",
      back: "One who makes oath to a written statement. Technically, a person subscribing a deposition but used interchangeably with 'Affiant.'",
    },
    {
      front: "Deposition",
      back: "The testimony of a witness taken out of court or other hearing proceeding, under oath or by affirmation, before a notary public or other person, officer or commissioner before whom such testimony is authorized by law to be taken, which is intended to be used at the trial or hearing.",
    },
    {
      front: "Duress",
      back: "Unlawful constraint exercised upon a person whereby he is forced to do some act against his will.",
    },
    {
      front: "Escrow",
      back: "The placing of an instrument in the hands of a person as a depository who on the happening of a designated event, is to deliver the instrument to a third person. This agreement, once established, should be unalterable.",
    },
    {
      front: "Executor",
      back: "One named in a will to carry out the provisions of the will.",
    },
    {
      front: "Ex Parte",
      back: "A hearing or examination in the presence of, or on papers filed by, one party and in the absence of the other.",
    },
    {
      front: "Felony",
      back: "A crime punishable by death or imprisonment in a state prison.",
    },
    {
      front: "Guardian",
      back: "A person in charge of a minor’s person or property.",
    },
    {
      front: "Judgment",
      back: "Decree of a court declaring that one individual is indebted to another and fixing the amount of such indebtedness.",
    },
    {
      front: "Jurat",
      back: "The part of an affidavit where the officer (notary public) certifies that it was sworn to before him",
    },
    {
      front: "Laches",
      back: "The delay or negligence in asserting one’s legal rights.",
    },
    {
      front: "Lease",
      back: "A contract whereby, for a consideration, usually termed rent, one who is entitled to the possession of real property transfers such right to another for life, for a term of years or at will.",
    },
    {
      front: "Lien",
      back: "A legal right or claim upon a specific property which attaches to the property until a debt is satisfied.",
    },
    { front: "Litigation", back: "The act of carrying on a lawsuit." },
    { front: "Misdemeanor", back: "Any crime other than a felony." },
    {
      front: "Mortgage On Real Property",
      back: "An instrument in writing, duly executed and delivered that creates a lien upon real estate as security for the payment of a specified debt, which is usually in the form of a bond.",
    },
    {
      front: "Notary Public",
      back: "A public officer who executes acknowledgments of deeds or writings in order to render them available as evidence of the facts therein contained; administers oaths and affirmation as to the truth of statements contained in papers or documents requiring the administration of an oath.",
    },
    {
      front: "Oath",
      back: "A verbal pledge given by the person taking it that his statements are made under an immediate sense of this responsibility to God, who will punish the affiant if the statements are false.",
    },
    {
      front: "Plaintiff",
      back: "A person who starts a suit or brings an action against another.",
    },
    {
      front: "Power of Attorney",
      back: "A written statement by an individual giving another person the power to act for him.",
    },
    {
      front: "Proof",
      back: "The formal declaration made by a subscribing witness to the execution of an instrument setting forth his place of residence, that he knew the person described in and who executed the instrument and that he saw such person execute such instrument.",
    },
    {
      front: "Protest",
      back: "A formal statement in writing by a notary public, under seal, that a certain bill of exchange or promissory note was on a certain day presented for payment, or acceptance, and that such payment or acceptance was refused.",
    },
    {
      front: "Seal",
      back: "It is not required, but if used, it should sufficiently identify the notary public, his authority and jurisdiction.",
    },
    {
      front: "Signature of Notary Public",
      back: "For a notarization, what you must do under the name you were appointed and under no other in black ink.",
    },
    {
      front: "Statute",
      back: "A law established by an act of the Legislature.",
    },
    {
      front: "Statute of Frauds",
      back: "State law which provides that certain contracts must be in writing or partially complied with, in order to be enforceable at law.",
    },
    {
      front: "Statute of Limitations",
      back: "A law that limits the time within which a criminal prosecution or a civil action must be started.",
    },
    {
      front: "Subordination Clause",
      back: "A clause which permits the placing of a mortgage at a later date which takes priority over an existing mortgage.",
    },
    {
      front: "Sunday",
      back: "An oath or affidavit may be given or taken on this day but not a deposition.",
    },
    {
      front: "Swear",
      back: "This term includes every mode authorized by law for administering an oath.",
    },
    {
      front: "Taking an Acknowledgment",
      back: "The act of the person named in an instrument telling the notary public that he is the person named in the instrument and acknowledging that he executed such instrument.",
    },
    {
      front: "Venue",
      back: "The geographical place where a notary public takes an affidavit or acknowledgment.",
    },
    {
      front: "Will",
      back: " The disposition of one’s property to take effect after death.",
    },
  ],
};

export default cards;
