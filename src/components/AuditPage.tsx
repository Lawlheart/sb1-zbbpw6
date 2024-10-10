import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuditItem, AuditSection } from '../types'
import { basicAudit } from '../audits'

const firstImpressionsSections: AuditSection[] = basicAudit.sections.slice(0, 2)

const basicAccessibilitySection: AuditSection = basicAudit.sections[2]

const AuditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [auditResponses, setAuditResponses] = useState<{ [key: string]: any }>({});
  const [auditInfo, setAuditInfo] = useState<{ siteName: string; date: string } | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the audit data based on the id
    // For now, we'll just set some mock data
    setAuditInfo({
      siteName: `Example Site ${id}`,
      date: new Date().toISOString().split('T')[0],
    });
  }, [id]);

  const handleInputChange = (question: string, field: string, value: string) => {
    setAuditResponses(prev => ({
      ...prev,
      [question]: {
        ...prev[question],
        [field]: value
      }
    }));
  };

  const renderAuditItem = (item: AuditItem, section: string) => {
    const response = auditResponses[item.question] || {};

    return (
      <div key={item.question} className="mb-6 p-4 bg-gray-800 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
        {section === 'First Impressions' && (
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Response:</label>
            <div className="flex space-x-4">
              {['yes', 'no', 'other'].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name={`${item.question}-response`}
                    value={option}
                    checked={response.response === option}
                    onChange={(e) => handleInputChange(item.question, 'response', e.target.value)}
                  />
                  <span className="ml-2 capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        {section === 'Basic Accessibility' && (
          <>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Score:</label>
              <select
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white"
                value={response.score || ''}
                onChange={(e) => handleInputChange(item.question, 'score', e.target.value)}
              >
                <option value="">Select a score</option>
                {['always', 'usually', 'sometimes', 'rarely', 'never', 'n/a'].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Priority:</label>
              <select
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white"
                value={response.priority || ''}
                onChange={(e) => handleInputChange(item.question, 'priority', e.target.value)}
              >
                <option value="">Select priority</option>
                {['critical', 'major', 'medium', 'low', 'not a priority'].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Comments:</label>
          <textarea
            className="w-full rounded-md bg-gray-700 border-gray-600 text-white"
            value={response.comments || ''}
            onChange={(e) => handleInputChange(item.question, 'comments', e.target.value)}
            rows={3}
          />
        </div>
        {section === 'Basic Accessibility' && (
          <div>
            <label className="block text-sm font-medium mb-1">Issue(s):</label>
            <textarea
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white"
              value={response.issues || ''}
              onChange={(e) => handleInputChange(item.question, 'issues', e.target.value)}
              rows={3}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-2">Website Audit</h1>
      {auditInfo && (
        <div className="mb-6 text-gray-300">
          <p>Site: {auditInfo.siteName}</p>
          <p>Date: {auditInfo.date}</p>
        </div>
      )}
      {[...firstImpressionsSections, basicAccessibilitySection].map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.description && <p className="mb-4 text-gray-300">{section.description}</p>}
          <div className="space-y-4">
            {section.items.map((item) => renderAuditItem(item, section.title))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuditPage;