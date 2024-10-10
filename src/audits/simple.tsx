export const firstImpressions: AuditSection = {
  title: 'First Impressions',
  description: 'Before we dive into the specifics of usability and accessibility, assess your first impression of the website by considering the following prompts.',
  items: [
    { question: 'Is it clear what purpose the website serves?', type: 'yesno' },
    { question: 'Is the visual design of the website aesthetically pleasing?', type: 'yesno' },
    { question: 'Does the website have a cohesive color scheme that is used across all pages of the site?', type: 'yesno' },
    { question: 'Do you feel like you have enough information to know what to do?', type: 'yesno' },
  ],
}

export const websiteBasics: AuditSection = {
  title: 'Website Basics',
  items: [
    { question: 'Website has a Privacy Policy', type: 'yesno' },
    { question: 'Website has Terms and Conditions', type: 'yesno' },
    { question: 'Website has an Accessibility Statement', type: 'yesno' },
    { question: 'Website has a Cookie Policy and Consent Notification', type: 'yesno' },
    { question: 'Website has a Data Storage Disclosure', type: 'yesno' },
    { question: 'Website has a Copyright Notification', type: 'yesno' },
    { question: 'Website is using HTTPS (essential if ecommerce)', type: 'yesno' },
  ],
},

export const basicAccessibility: AuditSection = {
  title: 'Basic Accessibility',
  description: 'Accessibility scores measure how easily a website is to use for people with disabilities of all kinds. This quick review will allow you to find the most common WCAG failures according to the WebAIM 1 Million Study https://webaim.org/projects/million',
  items: [
    { question: 'A "skip link" is provided as the very top of the page, and is revealed on focus.', type: 'score' },
    { question: 'Target areas and calls to action are set to be at least 44x44 pixels.', type: 'score' },
    { question: 'Large text (24px and larger) has a contrast ratio of text at least 3:1', type: 'score' },
    { question: 'Body and other small text (<24px) has a contrast ratio of at least 4.5:1', type: 'score' },
    { question: 'Link text copy is assigned a contrast of at least 3:1 against its surrounding text.', type: 'score' },
    { question: 'Images do not have text embedded in them.', type: 'score' },
    { question: 'Informative images are provided with meaningful alt text describing their content.', type: 'score' },
    { question: 'Active images are provided with meaningful alt text describing their purpose.', type: 'score' },
    { question: 'Decorative images identified so they can be ignored by assistive technologies.', type: 'score' },
    { question: 'Complex images are given alt text and an extended full text description.', type: 'score' },
    { question: 'Form controls (inputs) are assigned a visible, meaningful text label.', type: 'score' },
    { question: 'Field labels are left-justified and to the left of the field, or above.', type: 'score' },
    { question: 'Required fields are identified as such in the label text.', type: 'score' },
    { question: 'Links\' purpose may be discerned from link text alone, or their immediate context.', type: 'score' },
    { question: 'Links are visually distinct from surrounding text, and not just by color alone.', type: 'score' },
    { question: 'Buttons have visible text labels or ARIA-labels', type: 'score' },
    { question: 'Document type is specified.', type: 'score' },
    { question: 'Changes in language within the page are specified for assistive technologies.', type: 'score' },
  ],
};

export const basicAudit: AuditStructure = {
  sections: [
    firstImpressions,
    websiteBasics,
    basicAccessibility,
  ]
}