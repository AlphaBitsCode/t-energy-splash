
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { detectCountryFromIP, getCountryList } from '@/utils/countryDetection';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  campaignName: string;
}

const NewsletterPopup = ({ isOpen, onClose, email, campaignName }: NewsletterPopupProps) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDetectingCountry, setIsDetectingCountry] = useState(true);

  useEffect(() => {
    if (isOpen && !country) {
      detectCountryFromIP().then((detectedCountry) => {
        setCountry(detectedCountry);
        setIsDetectingCountry(false);
      });
    }
  }, [isOpen, country]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .update({ 
          name: name.trim() || null, 
          country: country || null,
          updated_at: new Date().toISOString()
        })
        .eq('email', email)
        .eq('campaign_name', campaignName);

      if (error) throw error;

      toast({
        title: "Profile updated!",
        description: "Thank you for providing additional details.",
      });
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    toast({
      title: "Welcome aboard!",
      description: "You're all set to receive updates about the thermal revolution.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-800 border border-cyan-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Complete Your Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-center">
            Help us personalize your experience (optional)
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
              />
            </div>
            
            <div>
              <Label htmlFor="country" className="text-gray-300">Country</Label>
              {isDetectingCountry ? (
                <div className="text-sm text-gray-400 py-2">
                  Detecting your location...
                </div>
              ) : (
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select your country</option>
                  {getCountryList().map((countryOption) => (
                    <option key={countryOption} value={countryOption}>
                      {countryOption}
                    </option>
                  ))}
                </select>
              )}
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleSkip}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skip
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
              >
                {isLoading ? 'Updating...' : 'Update Profile'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
