class RushingsController < ApplicationController
  def index
    respond_to do |format|
      format.csv do
        send_data rushings.to_csv
      end

      format.all do
        @rushings = rushings.page(page).per(page_size)
        render json: rushings, meta: meta
      end
    end
  end

  def teams
    hash = {}
    order_by = params[:order_by]&.to_sym || :yds
    dir = params[:dir] === 'descend' ? -1 : 1

    rushings.each do |rushing|
      team = hash[rushing.team] || Hash.new(0)
      team[:team] = rushing.team
      team[:yds] += rushing.yds
      team[:att] += rushing.att

      hash[rushing.team] = team
    end

    render json: hash.values.sort_by{ |team| team[order_by] * dir }
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
      current: page,
      page_size: page_size,
    }
  end

  def rushings
    list = Rushing.all
    list = list.where("player like ?", "%#{params[:player]}%") if params[:player].present?
    list = list.order("#{params[:order_by]} #{params[:dir] == "ascend" ? :asc : :desc}") if params[:order_by].present?
    list
  end
end
