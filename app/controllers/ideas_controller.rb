class IdeasController < ApplicationController
  # GET /ideas
  # GET /ideas.json
  before_filter :should_be_user
  before_filter :get_user

  def index
    @ideas = Idea.all.to_a
  end

  # GET /ideas/1
  # GET /ideas/1.json
  def show
    @idea = Idea.find(params[:id])
  end

  # GET /ideas/new
  # GET /ideas/new.json
  def new
    @idea = Idea.new
  end

  # GET /ideas/1/edit
  def edit
    @idea = Idea.find(params[:id])
  end

  # POST /ideas
  # POST /ideas.json
  def create
    @idea = @user.ideas.build(params[:idea])
    respond_to do |format|
      if @idea.save
        format.html { redirect_to root_path, notice: 'Idea was successfully created.' }
        format.json { render json: @idea, status: :created, location: @idea }
      else
        format.html { render action: "new" }
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /ideas/1
  # PUT /ideas/1.json
  def update
    @idea = Idea.find(params[:id])

    respond_to do |format|
      if @idea.update_attributes(params[:idea])
        format.html { redirect_to @idea, notice: 'Idea was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ideas/1
  # DELETE /ideas/1.json
  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    redirect_to ideas_url
  end

  # GET Method
  def show_good_idea
    @ideas = @user.ideas.where(:type=>"GoodIdea").to_a
  end

  # GET Method
  def my_own_project
    @ideas =@user.ideas.where(:type=>"Project").to_a
  end
end
