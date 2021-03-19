class PatientsController < ApplicationController
    def index
        params[:sort] ||= 'name'
        params[:direction] ||= 'asc' 
        params[:q] ||= nil
        @patients = Patient.search(keyword: params[:q], sort_column: params[:sort], sort_direction: params[:direction])
        render component: 'Patients/Index', props: { patients: @patients }
    end

    def create
        file = patient_params[:file]
        Patient.extract(file)
        render json: Patient.all
    end

    def patient_params
        params.permit(:file)
      end
end
