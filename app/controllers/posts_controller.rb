class PostsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy, :like]
  before_action :set_post, only: [:update, :destroy, :like]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include:[{ user:{only:[:id, :name]} }, {comments: {include: {user:{only: [:id, :name]}}}}]
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    render json: @post, include: :comments
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, include:{user:[:id, :name]}, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  def like
    puts @post
    puts params 
    puts @current_user
    @like = Like.new(user:@current_user, post:@post)
    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end 

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = current_user.posts.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content)
    end
end
