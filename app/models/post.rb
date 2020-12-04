class Post < ApplicationRecord
  def mood
    if emotional_status > 7
      "Good"
    elsif emotional_status > 4
      "Decent"
    else
      "Perturbed"  
    end
  end
end
