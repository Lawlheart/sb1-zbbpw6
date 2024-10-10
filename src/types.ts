export enum JourneyStatus {
  Find = 'Find',
  Survey = 'Survey',
  Pitch = 'Pitch',
  Audit = 'Audit',
  Deck = 'Deck',
  Presentation = 'Presentation'
}

export enum SiteSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export interface Site {
  id: string;
  link: string;
  name: string;
  details: string;
  fullMetaData: string;
  size: SiteSize;
  builtWith: string[];
  companyName: string;
  companyDescription: string;
  contactName: string;
  contactRole: string;
  contactMethod: string;
  meetingNotes: string;
  email: string;
  phoneNumber: string;
}

export interface Journey {
  id: string;
  status: JourneyStatus;
  nextStep: JourneyStatus;
  siteId: string;
  surveyId?: string;
  pitchId?: string;
  auditId?: string;
  deckId?: string;
  presentationId?: string;
  discoveredDate: string;
  outreachDate?: string;
  followupDate?: string;
}