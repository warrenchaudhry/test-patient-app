require 'csv'
class Patient < ApplicationRecord
    class << self
        def extract(file)
            CSV.foreach(file.path, headers: true) do |row|
                patient = Patient.new
                patient.name = row[0]
                patient.date = row[1]
                patient.number = row[2]
                patient.description = row[3]
                patient.save
            end
        end

        def search(keyword: nil, sort_column: 'name', sort_direction: 'asc')
            patients = Patient.all
            patients = patients.where('name ILIKE ?', "%#{keyword}%") if keyword
            sort_qry = [sort_column.strip.downcase, sort_direction.strip.downcase].join(' ')
            patients.order(sort_qry)
          end
    end
end
