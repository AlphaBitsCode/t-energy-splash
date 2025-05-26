
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import NewsletterPopup from './NewsletterPopup';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      // First, try to insert the email with campaign name
      const { error } = await supabase
        .from('newsletter_signups')
        .insert({ 
          email: email.toLowerCase().trim(),
          campaign_name: 'thermion'
        });

      if (error) {
        // If error is due to duplicate email for this campaign, that's okay
        if (error.code !== '23505') { // 23505 is unique constraint violation
          throw error;
        }
      }

      // Store the email and show popup for additional details
      setSubmittedEmail(email.toLowerCase().trim());
      setEmail('');
      setShowPopup(true);
      
    } catch (error) {
      console.error('Error signing up:', error);
      toast({
        title: "Signup failed",
        description: "There was an error signing you up. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSubmittedEmail('');
  };

  return (
    <>
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Chilled, Stay Tuned
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to witness the thermal revolution,
              <br />July 2025 @ Bien Hoa city, Vietnam.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Joining...' : 'Join the Revolution'}
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-400 mt-6">
              No spam. Only groundbreaking updates.
            </p>
          </div>
        </div>
      </section>

      <NewsletterPopup
        isOpen={showPopup}
        onClose={handlePopupClose}
        email={submittedEmail}
        campaignName="thermion"
      />
    </>
  );
};

export default NewsletterSignup;
