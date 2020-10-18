class RushingsController < ApplicationController
  def index
    respond_to do |format|
      format.csv do
        send_data rushings.to_csv
      end

      format.all do
        # response.headers['Content-Type'] = 'application/json'
        render json: rushings.page(page).per(page_size), meta: meta
      end
    end
  end

  private

  def page
    params[:page]&.to_i || 1
  end

  def page_size
    params[:page_size]&.to_i || 10
  end

  def meta
    {
      total: rushings.count,
      page: page,
      page_size: page_size
    }
  end

  def rushings
    list = Rushing.all
    list = list.where("player like ?", "%#{params[:q]}%") if params[:q].present?
    list = list.order("#{params[:order_by]} #{params[:dir] ? :asc : :desc}") if params[:order_by].present?
    list
  end
end
