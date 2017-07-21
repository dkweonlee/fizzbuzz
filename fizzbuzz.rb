require 'pry'
def fizzbuzz
  start_num = 1
  end_num = 15

  list_num = (start_num .. end_num).to_a 
  list_num.map do |num| 
    if num % 3 == 0 && num % 5 == 0
      puts 'fizzbuzz'
    elsif num % 5 == 0
      puts 'buzz'
    elsif num % 3 == 0
      puts 'fizz'
    else
      puts num
    end
  end
end

fizzbuzz